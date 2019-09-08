var crypto = require('../Function/crypto');
var Sequelize = require('sequelize');
var sequelize = new Sequelize(
        'db_account_online', 
        'user_admin', 
        crypto.decrypt('35ef986132d28fca1a2959e675c75222'), 
        {
            host: 'localhost',
            dialect: 'mysql',
            pool: {
                max: 100,
                min: 0,
                idle: 10000
            },
        }
    );
  module.exports = sequelize;