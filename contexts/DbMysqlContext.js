var mysql = require('mysql');
var crypto = require('../Function/crypto');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "user_admin",
  password: crypto.decrypt("35ef986132d28fca1a2959e675c75222"),
  database: "db_account_online"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;