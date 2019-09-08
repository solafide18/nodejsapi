var Sequelize = require('sequelize');
var sequelize = require('../../contexts/DbMySqlsequelize');

var tbl_user = sequelize.define('tbl_user', {
    userid : Sequelize.STRING,
    groupid : Sequelize.STRING,
    upper_userid : Sequelize.STRING,
    password : Sequelize.STRING,
    old_password : Sequelize.STRING,
    start_active_date : Sequelize.DATE,
    expired_date : Sequelize.DATE,
    last_active : Sequelize.DATE,
    active : Sequelize.BOOLEAN,
    created_by : Sequelize.STRING,
    created_date : Sequelize.DATE,
    modified_by : Sequelize.STRING,
    modified_date : Sequelize.DATE,
  }, {
    freezeTableName: true, // Model tableName will be the same as the model name
    createdAt:false,
    updatedAt:false
  });

module.exports = tbl_user;
// exports.getAll = getAll;