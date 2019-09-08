var bcrypt = require('bcrypt');
const saltRounds = 10;

exports.hash = function(text){
    console.log("password : ",text)
    return bcrypt.hashSync(text,saltRounds);
}

exports.compare = function(text,hash){
    return bcrypt.compareSync(text,hash);
}