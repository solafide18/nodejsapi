'use strict';
module.exports=function(app){
    var user = require('../controllers/userController');
    var login = require('../controllers/loginController');
    var crypto = require('../Function/crypto');
    app.route('/').get((req,res)=>{
        return res.send('Api Started');
    });
    app.route('/test')
        .get((req,res)=>{return res.send('api/test route is work');})
        .post((req,res)=>{return res.json(req.body);});
    app.route('/test/:id').get((req,res)=>{
        return res.send('get api dengan param id = '+req.params.id+' berhasil');
    });
    app.route('/crypto/encrypt/:text').get((req,res)=>{
        return res.json(crypto.encrypt(req.params.text));
    });
    app.route('/crypto/decrypt/:text').get((req,res)=>{
        return res.json(crypto.decrypt(req.params.text));
    });
    app.route('/crypto/iv').get((req,res)=>{
        return res.json(crypto.iv);
    });
    app.route('/account/register')
        .get(user.test);
    app.route('/user/all')
        .get(user.test);
    app.route('/user/add')
        .post(user.addUser);
    app.route('/login/auth')
        .post(login.auth);
    app.route('/login/verify')
        .post(login.verify);
}