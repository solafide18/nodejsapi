'use strict'
var jwt=require('../Function/jwt');
var bcrypt = require('../Function/bcrypt');
var response = require('../models/response/defaultresponse');
var responsetoken = require('../models/response/authresponse');

exports.auth = async function(req,res){
    var datareq = req.body;
    var cekValid = await jwt.getValidUser(datareq.userid,datareq.password);
    if(cekValid){
        var token = await jwt.getToken(datareq.userid);
    }
    responsetoken("bearer "+token, 0,0,res);
}

exports.verify = async function(req,res){
    var datareq = req.body;
    console.log(datareq);
    try{
        var user = await jwt.getUser(datareq.token);
        response(user,res);
    }
    catch(err){
        response(user,res,false,err);
    }
}