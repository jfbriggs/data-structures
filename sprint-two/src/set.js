var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) { // constant
  this._storage[item] = item;
};

setPrototype.contains = function(item) { // constant
  if (this._storage[item] === item) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) { // constant
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
