var readlineSync = require('readline-sync'),
    chalk = require('chalk');

var _defaults = {
  color: 'yellow',
  format: true,
  validate: function(input) { return input; }
};

// stipped down version of underscore's _.defaults
function defaults(dest, src) {
  for (var prop in src) {
    if (dest[prop] === void 0) dest[prop] = src[prop];
  }
  return dest;
};

/**
 * Wrapper around [`readline-sync`](https://github.com/anseki/readline-sync) with 
 * [`chalk`](https://github.com/sindresorhus/chalk) coloring for synchronous cli prompting
 * 
 * @param  {String|Array<String>} message the prompt message / question
 * @param  {Object} options [optional] {color: <string>, format: <boolean>, validate: <function>}
 * @return {String|Array<String>} user input string or array of strings depending on `message` type
 */
module.exports = function(message, options) {
  options = options ? defaults(options, _defaults) : _defaults;
  if (message instanceof Array) {
    return message.map(function(mess) { 
      return module.exports(mess, options); 
    });
  }
  var input = readlineSync.question(chalk[options.color](message));
  if (options.format) input = input.trim().toLowerCase();
  options.validate(input);
  return input;
};