'use strict'
var jwt=require('../Function/jwt');
var bcrypt = require('../Function/bcrypt');
var response = require('../models/response/defaultresponse');
var responsetoken = require('../models/response/authresponse');

exports.auth = async function(req,res){
    var datareq = req.body;
    //console.log(datareq);
    var cek = bcrypt.compare(datareq.password,'$2b$10$RKyEeuqaq/scF0qK/0QCUe.Rgx5iQolow4pxwm19BF3K9k0n9Mwka');
    //console.log(cek);
    var cekValid = await jwt.getValidUser(datareq.userid,datareq.password);
    if(cekValid){
        var token = await jwt.getToken(datareq.userid);
    }
    responsetoken("bearer "+token, 0,0,res);
    //response(data,res);
}

exports.verify = async function(req,res){
    var datareq = req.body;
    console.log(datareq);
    var user = await jwt.getUser(datareq.token);
    //var cek = bcrypt.compare(datareq.password,'$2b$10$RKyEeuqaq/scF0qK/0QCUe.Rgx5iQolow4pxwm19BF3K9k0n9Mwka');
    //console.log(cek);
    //var cekValid = await jwt.getValidUser(datareq.userid,datareq.password);
    //if(cekValid){
    //    var token = await jwt.getToken(datareq.userid);
    //}
    //responsetoken(token, 0,0,res);
    response(user,res);
}