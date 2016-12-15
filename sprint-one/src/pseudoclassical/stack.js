var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;

};

Stack.prototype.push = function(value) {
  this.storage[(this.count).toString()] = value;
  this.count++;
};

Stack.prototype.pop = function() {
  var remove = this.storage[(this.count - 1).toString()];
  delete this.storage[(this.count - 1).toString()];
  this.count--;
  return remove;
};

Stack.prototype.size = function() {
  if (this.count < 0) {
    return 0;
  }
  return this.count;
};

