var r = require('ramda');

var compose = function(f,g) {
  return function(x) {
    return f(g(x));
  };
};

var toUpperCase = x => x.toUpperCase();
var exclaim = x => x + "!";
var shout = compose(exclaim, toUpperCase);

shout("send in the clowns");


var head = function(x) { return x[0]; };
var reverse = r.reduce((acc, x) => {
  // console.log(`acc = ${acc}`);
  // console.log(`x = ${x}`);
  return [x].concat(acc);
}, []);
var last = compose(head, reverse);

last(['jumpkick', 'roundhouse', 'uppercut']);


//var associative = compose(f, compose(g, h)) == compose(compose(f, g), h);

var f1 = compose(toUpperCase, compose(head, reverse));
var f2 = compose(compose(toUpperCase, head), reverse);

f1(['one', 'two', 'three']);
f2(['one', 'two', 'three']);


function compose(f,g,h) {
  return x => f(g(h(x)));
}

var lastUpper = compose(toUpperCase, head, reverse);
lastUpper(['jumpkick', 'roundhouse', 'uppercut']);

function compose(f,g,h,i) {
  return x => f(g(h(i(x))));
}

var loudLastUpper = compose(exclaim, toUpperCase, head, reverse);
loudLastUpper(['jumpkick', 'roundhouse', 'uppercut']);



function composeLR(f,g,h,i) {
  return x => i(h(g(f(x))));
}
var loudLastUpperLR = composeLR(reverse, head, toUpperCase, exclaim);
loudLastUpperLR(['jumpkick', 'roundhouse', 'uppercut']);


var loudLastUpper = r.compose(exclaim, toUpperCase, head, reverse);
loudLastUpper(['jumpkick', 'roundhouse', 'uppercut']);

// or
var last = r.compose(head, reverse);
var loudLastUpper = r.compose(exclaim, toUpperCase, last);
loudLastUpper(['jumpkick', 'roundhouse', 'uppercut']);

// or
var last = r.compose(head, reverse);
var angry = r.compose(exclaim, toUpperCase);
var loudLastUpper = r.compose(angry, last);
loudLastUpper(['jumpkick', 'roundhouse', 'uppercut']);