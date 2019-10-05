'use strict';
var response = require('../models/response/defaultresponse');
var bcrypt = require('../Function/bcrypt');
var tbl_user = require('../models/database/tbl_user');

exports.test = async function(req, res) {
    var data = await tbl_user.findAll().then(a => {
        return a;
    })
    console.log(data);
    // res.json(data);
    response(data,res);
};

exports.find = async function(req, res) {
    var data = await tbl_user.findAll({
        where:{
            id:req.params.id
        },
        limit:1
    }).then(a => {
        return a;
    });
    if(data.length==0) response(null,res,false,"data not found");
    // console.log(data);
    // res.json(data);
    response(data[0],res);
};

exports.addUser = async function(req, res) {
    var datereq = req.body;
    // console.log(datereq);
    var data = await tbl_user.create(
        {
            userid : datereq.userid,
            groupid : datereq.groupid,
            upper_userid : datereq.upper_userid,
            password : await bcrypt.hash(datereq.password),
            start_active_date : new Date(),
            active : true,
            created_by : 'ADMINISTRATOR',
            created_date : new Date(),
        }
    )
    .then(user=>{
        // console.log(user);
        return user;
    })
    .catch(err=>{
        return err;
    })
    response(data,res);
};