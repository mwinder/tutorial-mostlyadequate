var r = require('ramda');


// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function

// var words = function(str) {
//   return r.split(' ', str);
// };

var words = r.split(' ');
words;

words('an example sentence');


// Exercise 1a
//==============
// Use map to make a new words fn that works on an array of strings.

var sentences = r.map(words);

var lorem = ["Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."];
sentences(lorem);


// Exercise 2
//==============
// Refactor to remove all arguments by partially applying the functions

var curry = r.curry;

var match = curry(function(what, str) {
  return str.match(what);
});

// var filterQs = function(xs) {
//   return _.filter(function(x){ return match(/q/i, x);  }, xs);
// };

var filterQs = r.filter(match(/q/i));

filterQs(["asdfg", "qwerty"]);


// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max to not reference any
// arguments

// LEAVE BE:
var _keepHighest = function(x,y){ return x >= y ? x : y; };

// REFACTOR THIS ONE:
// var max = function(xs) {
//   return _.reduce(function(acc, x){
//     return _keepHighest(acc, x);
//   }, -Infinity, xs);
// };

var max = r.reduce(_keepHighest, -Infinity);

max([12, 23, 43, 1, 67, 111, 77]);


// Bonus 1:
// ============
// wrap array's slice to be functional and curried.
// //[1,2,3].slice(0, 2)
var slice = r.curry(function (begin, end, xs) {
  return xs.slice(begin, end);
});

var d = [1,2,3];
d.slice(0, 2);
d.slice(0, 2);

// Bonus 2:
// ============
// use slice to define a function "take" that takes n elements from the beginning of the string. Make it curried
// // Result for "Something" with n=4 should be "Some"

// Attempt 1:
// var take = r.curry(function (n, str) {
//   var chars = str.split("");
//   return r.slice(0, n, chars).join("");
// });
// var take4 = take(4);
// take4("Something");

// Attempt 2:
// var take = r.curry(function (n, xs) {
//   return r.slice(0, n, xs);
// });
// var take4 = take(4);
// take4("Something".split("")).join("");

// Attempt 3:
var take = r.slice(0);
var take4 = take(4);
take4("Something".split("")).join("");
