# synchro-prompt

Wrapper around [readline-sync][1] with 
[chalk][2] coloring for synchronous cli prompting.

## Install

```bash
npm install synchro-prompt
```

## Usage

```js
var prompt = require('synchro-prompt');

var answer = prompt('Enter value: ');
// $ Enter Value: HELLO!
answer; // HELLO!

// or as an array
var answers = prompt(['Name: ', 'Age: ']);
// $ Name: Jane
// $ Age: Doe
answers instanceof Array; // true
answers; // ['Jane', 'Doe']
```
## Options

By default, the prompt coloring is yellow. This can be overriden
with any valid [`chalk`][2] color (provided as string), along with an optional
transformation callback which can be used to format or validate input.

```js
var options = {
  color: 'magenta',
  transform: function(input) {
    return input.trim().toLowerCase();
  }
};
prompt('Enter something: ', options);

// back to the default no-transform yellow
prompt('And again: ');
```

You can set the options from one point forward by passing the options
hash as the first argument.

```js
// prompt from here on will always use your options
prompt({ 
  color: green, 
  transform: function(input) { 
    return Date.now() + '_' + input; 
  } 
});

prompt('...'); // ie. 1426910954458_something

// but you can still override a single call
prompt('...', { transform: function(input) { return input; }});
// future calls without a second argument will go back to prepending a timestamp

// to restore the factory defaults, call the synchro-prompt fn with no arguments
prompt(); // yellow, no-transform
```

## License

[lokua.net/license-mit][2]

[1]: https://github.com/anseki/readline-sync
[2]: https://github.com/sindresorhus/chalk
[3]: http://lokua.net/license-mit.html
