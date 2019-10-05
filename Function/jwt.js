var jwt = require('jsonwebtoken');
var bcrypt = require('../Function/bcrypt');
var tbl_user = require('../models/database/tbl_user');
var response = require('../models/response/defaultresponse');
var KEY = "SUPERPASSWORDKW";

exports.getValidUser = async function(userid, password)
{
    //console.log(userid, password);
    return await tbl_user.findOne({
        where:{
            userid:userid
        }
    })
    .then(function(data){
        // console.log(data);
        var flag = bcrypt.compare(password,data.password)
        //console.log("cek hasil ",data.password," compare : ",cek);
        return flag;
    })
    .catch(function(err){
        return false;
    });
}

exports.getToken = async function(userid)
{
    //console.log(userid, password);
    return await jwt.sign(
        { 
            userid: userid,
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            iat: Math.floor(Date.now() / 1000) + (60 * 60)
        },
        KEY
    )
}

exports.getUser = async function(token)
{
    //console.log(userid, password);
    return await jwt.verify(
        token,
        KEY,
        {
            expiresIn:  60 * 60
        }
    )
}

exports.authorization = async function(req,res,next){
    var data;
    try {
        if(req.headers.authorization == 'undefined' || req.headers.authorization == undefined || req.headers.authorization == null) throw new Error("no token detected");

        var splitToken = req.headers.authorization.split(' ');
        if(splitToken[0].toLowerCase()!="bearer") throw new Error("wrong token format");

        if(splitToken[1]==null) throw new Error("no token detected");
        const decodedToken = jwt.verify(splitToken[1], KEY);
        if(decodedToken==null) throw new Error("can't found userid");
        next();
    } catch (err) {
        console.log(err);        
        response(data,res,false,err.message==undefined || err.message==null ?err:err.message);
    }
}