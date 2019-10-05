'use strict';

module.exports = function(data, res, status=true,remarks="Success") {
  var response = {
      'status': status,
      'remarks':remarks,
      'data': data
  };
  res.json(response);
  res.end();
};