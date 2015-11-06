
var add = function (a) {
  return function(b) {
    return a + b;
  };
};

var increment = add(1);
var add10 = add(10);

increment(2)

add10(2);


var curry = require('ramda').curry;

var match = curry(function(what, str) {
  return str.match(what);
});

var replace = curry(function(what, replacement, str) {
  return str.replace(what, replacement);
});

var filter = curry(function(f, ary) {
  return ary.filter(f);
});

var map = curry(function(f, ary) {
  return ary.map(f);
});

match(/\s+/g, 'hello world');
match(/\s+/g)('hello world');
var hasSpaces = match(/\s+/g);
hasSpaces('hello world');
hasSpaces('spaceless');

filter(hasSpaces, ["tori_spelling", "tori amos"]);
var findSpaces = filter(hasSpaces);
findSpaces(["tori_spelling", "tori amos"]);

var noVowels = replace(/[aeiou]/ig);
var censored = noVowels("*");
censored("Chocolate Rain");