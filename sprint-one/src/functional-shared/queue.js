var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var instance = {};

  instance.storage = {};

  instance.count = 0;

  instance.lowest = 0;

  extend(queueMethods, instance);

  return instance;
};

var extend = function(source, dest) {
  for (var key in source) {
    dest[key] = source[key];
  }
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[(this.count + this.lowest).toString()] = value;
    this.count++;
  },
  dequeue: function() {
    var remove = this.storage[(this.lowest).toString()];
    delete this.storage[(this.lowest).toString()];
    this.count--;
    if (this.count > 0) {
      this.lowest++;
    }
    return remove;
  },
  size: function() {
    if (this.count < 0) {
      return 0;
    }
    return this.count;
  }
};


