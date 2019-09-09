var jwt = require('jsonwebtoken');
var bcrypt = require('../Function/bcrypt');
var tbl_user = require('../models/database/tbl_user');
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
        { userid: userid },
        KEY
    )
}

exports.getUser = async function(token)
{
    //console.log(userid, password);
    return await jwt.verify(
        token,
        KEY
    )
}

exports.authorization = async function(req,res,next){
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, KEY);
        const userid = decodedToken.userid;
        if (req.body.userId && req.body.userId !== userId) {
        throw 'Invalid user ID';
        } else {
        next();
        }
    } catch (error) {
        
    }
}