# synchro-prompt

Wrapper around [readline-sync](https://github.com/anseki/readline-sync) with 
[chalk](https://github.com/sindresorhus/chalk) coloring for synchronous cli prompting.

## Install

```bash
npm install synchro-prompt
```

## Usage

#### prompt(&lt;String|Array&lt;String&gt;&gt;, [options])

```js
var prompt = require('synchro-prompt');

var answer = prompt('Enter value: ');
answer instanceof String; // true

// or as an array
var answers = prompt(['Name: ', 'Age: ']);
answers instanceof Array; // true
```
#### Options

```js
// defaults
{
  color: 'yellow',
  format: true, // trim and toLowerCase
  validate: function(input) {}
}
```

## License

[lokua.net/license-mit](http://lokua.net/license-mit.html)

