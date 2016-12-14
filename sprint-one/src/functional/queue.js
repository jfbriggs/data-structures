var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0;
  // Implement the methods below

  var lowest = 0;

  someInstance.enqueue = function(value) {
    storage[(size + lowest).toString()] = value;
    size++;
  };

  someInstance.dequeue = function() {
    var remove = storage[lowest.toString()];
    delete storage[lowest.toString()];
    size--;
    if ( size > 0 ) {
      lowest++;
    }
    return remove;
  };

  someInstance.size = function() {
    if (size < 0) {
      return 0;
    }
    return size;
  };

  return someInstance;
};

// {'1': 'b', '2': 'c', '3'}

// size = 2
// lowest = 1


