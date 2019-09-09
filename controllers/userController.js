'use strict';
var response = require('../models/response/defaultresponse');
var bcrypt = require('../Function/bcrypt');
var tbl_user = require('../models/database/tbl_user');

exports.test = async function(req, res) {
    // connection.query('SELECT * FROM tbl_user', function (error, rows, fields){
    //     if(error){
    //         console.log(error)
    //         res.json(error);
    //     } else{
    //         response(rows,res);
    //     }
    // });
    //response(req.body,res);
    // res.json(req.body);
    // response(tbl_users.getAll(),res);
    var data = await tbl_user.findAll().then(a => {
        return a;
    })
    console.log(data);
    // res.json(data);
    response(data,res);
};

exports.addUser = async function(req, res) {
    var datereq = req.body;
    console.log(datereq);
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
        console.log(user);
        return user;
    })
    .catch(err=>{
        return err;
    })
    response(data,res);
};