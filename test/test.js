var prompt = require('../index'),
    chalk = require('chalk');

var options = {
  color: 'magenta',
  format: false,
  validate: function(input) {
    if (isNaN(+input)) { 
      throw new Error(chalk.red(input + ' is not a number')); 
    }
  }
};  

var answer = prompt('Enter a number: ', options);
console.log(chalk.green('You entered: ') + answer);
console.log();

var answers = prompt(['1st', '2nd', '3rd'].map(function(n) {
  return 'Enter ' + n + ' value: ';
}));
console.log(chalk.green('You entered: ') + answers);
console.log();