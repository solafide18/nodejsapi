'use strict';
var path = require('path');
module.exports=function(app){
    var user = require('../controllers/userController');

    app.route('/').get((req,res)=>{
        return res.sendFile(path.join(__basedir+'/views/index.html'))
    });
    app.route('/index').get((req,res)=>{
        return res.sendFile(path.join(__basedir+'/views/index.html'))
    });
}