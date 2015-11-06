
var _ = require('ramda');

function Container(x) {
  this.__value = x;
}

Container.of = function(x) { return new Container(x); };

Container.of(3);

Container.of("hotdogs")

Container.of({name: "yoda"})

Container.of(Container.of({name: "yoda"}))


Container.prototype.map = function(f) {
  return Container.of(f(this.__value));
};

Container.of(2).map(x => x + 2);

Container.of("blah").map(x => x.toUpperCase());

var Identity = Container;