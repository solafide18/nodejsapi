const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
var password = 'PASSWORDSUPPERKW';

function encrypt(text) {
    let cipher = crypto.createCipher(algorithm,password)
    var crypted = cipher.update(text,'utf8','hex')
    crypted += cipher.final('hex');
    return crypted;
}

function decrypt(text){
    var decipher = crypto.createDecipher(algorithm,password)
    var dec = decipher.update(text,'hex','utf8')
    dec += decipher.final('utf8');
    return dec;
  }

exports.encrypt = encrypt;
exports.decrypt = decrypt;