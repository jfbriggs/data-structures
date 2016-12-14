var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size.toString()] = value;
    size++;
    
  };

  someInstance.pop = function() {
    var removed = storage[(size - 1).toString()];
    delete storage[(size - 1).toString()];
    size--;
    return removed;
  };

  someInstance.size = function() {
    if (size < 0) {
      return 0;
    }
    return size;
  };

  return someInstance;
};
