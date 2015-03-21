var readlineSync = require('readline-sync'),
    chalk = require('chalk');

var _defaults = {
  color: 'yellow',
  transform: function(input) { return input; }
};

var defaults = _defaults;

module.exports = function(message, options) {

  // reset to factory defaults
  if (!arguments.length) {
    defaults = _defaults;
    return;
  }

  // override default options from here on out
  var kind = typeof message;
  if (kind !== 'string' && kind !== 'number' && !(message instanceof Array)) {
    defaults = message;
    return;
  }

  return prompt(message, options);
};

function merge(dest, src) {
  for (var prop in src) {
    if (dest[prop] === void 0) dest[prop] = src[prop];
  }
  return dest;
};

function prompt(message, options) {
  options = options ? merge(options, defaults) : defaults;
  if (message instanceof Array) {
    console.log('...about to map...');
    return message.map(function(mess) { 
      return prompt(mess, options); 
    });
  }
  var input = readlineSync.question(chalk[options.color](message));
  return options.transform(input);
}