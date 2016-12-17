var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var instance = Object.create(queueMethods);

  instance.storage = {};
  instance.count = 0;
  instance.lowest = 0;

  return instance;
};

var queueMethods = {

  enqueue: function(value) {
    this.storage[(this.count + this.lowest)] = value;
    this.count++;
  },
  
  dequeue: function() {
    var remove = this.storage[(this.lowest)];
    delete this.storage[(this.lowest)];
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


