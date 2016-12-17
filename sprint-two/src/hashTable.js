

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;

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

  this._size++;

  if (this._size > (this._limit * 0.75)) {
    this._resize('expand');
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

  this._size--;

  if (this._size < this._limit * 0.25) {
    this._resize('shrink');
  }

};

HashTable.prototype._resize = function(changeType) { // linear

  var tempStorage = [];
  this._storage.each(function(index) {
    if (index !== undefined) {
      index.forEach(function(pair) {
        tempStorage.push(pair);
      });
    }
  });

  if (changeType === 'expand') {
    this._limit = this._limit * 2;
  } else {
    if (this._limit > 8) {
      this._limit = this._limit / 2;
    }
  }

  this._storage = LimitedArray(this._limit);

  this._size = 0;

  var table = this;

  tempStorage.forEach(function(pair) {
    table.insert(pair[0], pair[1]);
  });

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
