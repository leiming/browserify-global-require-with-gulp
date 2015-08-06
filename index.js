"use strict";

var template = require('./template.hbs')

exports.hello = function (name) {
  return template({name: name})
}