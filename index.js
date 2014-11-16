var readlineSync = require('readline-sync'),
    chalk = require('chalk'),
    _ = require('lodash');

var _defaults = {
  color: 'yellow',
  format: true,
  validate: function(input) { return input; }
};

/**
 * Wrapper around [`readline-sync`](https://github.com/anseki/readline-sync) with 
 * [`chalk`](https://github.com/sindresorhus/chalk) coloring for synchronous cli prompting
 * 
 * @param  {String|Array<String>} message the prompt message / question
 * @param  {Object} options [optional] {color: <string>, format: <boolean>, validate: <function>}
 * @return {String|Array<String>} user input string
 */
module.exports = function(message, options) {
  options = options ? _.defaults(options, _defaults) : _defaults;
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