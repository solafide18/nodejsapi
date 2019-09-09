'use strict';

module.exports = function(token,starttime,endtime, res) {
  var response = {
      'token': token,
      'start':starttime,
      'end': endtime
  };
  res.json(response);
  res.end();
};