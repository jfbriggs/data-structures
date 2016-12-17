var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var count = 0;
  // Implement the methods below

  var lowest = 0;

  someInstance.enqueue = function(value) {
    storage[(count + lowest)] = value;
    count++;
  };

  someInstance.dequeue = function() {
    var remove = storage[lowest];
    delete storage[lowest];
    count--;
    if ( count > 0 ) {
      lowest++;
    }
    return remove;
  };

  someInstance.size = function() {
    if (count < 0) {
      return 0;
    }
    return count;
  };

  return someInstance;
};

// {'1': 'b', '2': 'c', '3'}

// size = 2
// lowest = 1