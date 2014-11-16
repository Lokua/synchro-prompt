var prompt = require('../index'),
    chalk = require('chalk');

var answer = prompt('Enter value: ', {
  color: 'magenta',
  format: false,
  validate: function(input) {
    if (isNaN(+input)) {
      throw new Error(input + ' is not a number');
    }
  }
});

console.log(answer);

var answers = prompt([0, 1, 2, 3]);
console.log(answers);