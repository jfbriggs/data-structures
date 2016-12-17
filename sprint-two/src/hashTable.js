

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {  // constant (approaching linear in worst case)
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k, v]]);
  } else {
    var indexPairs = this._storage.get(index);
    var flag = false;
    for (var i = 0; i < indexPairs.length; i++) {
      if (indexPairs[i][0] === k) {
        indexPairs[i][1] = v;
        flag = true;
      }
    }
    if (flag === false) {
      indexPairs.push([k, v]);    
    }
    this._storage.set(index, indexPairs);
  }

  var count = 0;
  this._storage.each(function(index) {
    if (index !== undefined) {
      count = count + index.length;
    }
  });


  if (count > (this._limit * 0.75)) {
    this.expand();
  }
  
};

HashTable.prototype.retrieve = function(k) { // constant (approaching linear in worst case)
  var index = getIndexBelowMaxForKey(k, this._limit);

  var indexPairs = this._storage.get(index); 
  if (indexPairs === undefined) {
    return undefined;
  }
  
  for (var i = 0; i < indexPairs.length; i++) {
    if (indexPairs[i][0] === k) {
      return indexPairs[i][1];
    }
  }

};

HashTable.prototype.remove = function(k) { // constant (approaching linear in worst case)
  var index = getIndexBelowMaxForKey(k, this._limit);
  var indexPairs = this._storage.get(index);
  for (var i = 0; i < indexPairs.length; i++) {
    if (indexPairs[i][0] === k) {
      indexPairs.splice(i, 1);
    }
  }

  var count = 0;
  this._storage.each(function(index) {
    if (index !== undefined) {
      count = count + index.length;
    }
  });

  if (count < this._limit * 0.25) {
    this.shrink();
  }

};

HashTable.prototype.expand = function() { // linear
  var tempStorage = [];
  this._storage.each(function(index) {
    if (index !== undefined) {
      index.forEach(function(pair) {
        tempStorage.push(pair);
      });
    }
  });

  this._limit = this._limit * 2;
  this._storage = LimitedArray(this._limit);

  var table = this;

  tempStorage.forEach(function(pair) {
    table.insert(pair[0], pair[1]);
  });

};

HashTable.prototype.shrink = function() {  // linear

  var tempStorage = [];
  this._storage.each(function(index) {
    if (index !== undefined) {
      index.forEach(function(pair) {
        tempStorage.push(pair);
      });
    }
  });

  this._limit = this._limit / 2;
  this._storage = LimitedArray(this._limit);

  var table = this;

  tempStorage.forEach(function(pair) {
    table.insert(pair[0], pair[1]);
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
