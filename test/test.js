var prompt = require('../index'),
    chalk = require('chalk');  

console.log('TEST1 (default - should not format)')
var answer = prompt('Enter something: ');
console.log(chalk.green('You entered: ') + answer);
console.log();

console.log('TEST2 (transform=(trim>toLower),color=magenta)');
answer = prompt('Enter something: ', { 
  color: 'magenta',
  transform: function(input) {
    return input.trim().toLowerCase();
  } 
});
console.log(chalk.green('You entered: ') + answer);
console.log();

console.log('TEST3 (prompt should prompt for each value in array)');
answer = prompt([1,2,3]);
console.log('answer: %j', answer);
console.log(chalk.green('You entered: ') + answer);
console.log();

console.log('TEST4 (all prompts should use provided default override)');
prompt({ 
  color: 'blue', 
  transform: function(input) {
    return Date.now() + ' ' + input;
  } 
});

for (var i = 0; i < 3; i++){
  var answer = prompt('Enter something: ');
  console.log(chalk.green('You entered: ') + answer);
}

console.log('TEST5 (restoring factory defaults)');
prompt();
answer = prompt('Am I yellow and case sensitive? ');
console.log(chalk.green('You entered: ') + answer);
console.log();
