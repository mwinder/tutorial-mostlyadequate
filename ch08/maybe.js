
var r = require('ramda');

function Maybe(x) {
  this.__value = x;
}

Maybe.of = function(x) {
  return new Maybe(x);
};

Maybe.prototype.isNothing = function() {
  return (this.__value === null || this.__value === undefined);
};

Maybe.prototype.map = function(f) {
  return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));
};


var match = r.match(/a/ig);

Maybe.of("Malkovich Malkovich").map(match);
Maybe.of(null).map(match);

var add = r.curry((a, b) => a + b);

Maybe.of({name: "Dinah", age: 14}).map(r.prop("age")).map(add(10));
Maybe.of({name: "Boris"}).map(r.prop("age")).map(add(10));

var map = r.curry(function (f, functor) {
  return functor.map(f);
});

var compose = r.compose;

var safeHead = function (xs) {
  return Maybe.of(xs[0]);
}

var streetname = compose(map(r.prop('street')), safeHead, r.prop("addresses"));

streetname({addresses: []});

streetname({addresses: [{street: 'Shady Lane', number: 123}]});


var streetnames = compose(map(r.prop('street')), r.prop("addresses"));

streetnames({addresses: [{street: 'Shady Lane', number: 123}, {street: 'Another Lane', number: 24}]});