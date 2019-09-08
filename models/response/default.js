'use strict';

module.exports = function(data, res) {
  var response = {
      'status': true,
      'remarks':'Success',
      'data': data
  };
  res.json(response);
  res.end();
};