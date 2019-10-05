var jwt=require('../Function/jwt');

module.exports = function(req,res,next){
    jwt.authorization(req,res,next);
}