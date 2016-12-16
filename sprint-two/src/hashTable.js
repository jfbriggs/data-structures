

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {  // linear
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
  
};

HashTable.prototype.retrieve = function(k) { // linear
  var index = getIndexBelowMaxForKey(k, this._limit);

  var indexPairs = this._storage.get(index); // ['Steven', 'Seagal']
  for (var i = 0; i < indexPairs.length; i++) {
    if (indexPairs[i][0] === k) {
      return indexPairs[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) { // linear
  var index = getIndexBelowMaxForKey(k, this._limit);
  var indexPairs = this._storage.get(index);
  for (var i = 0; i < indexPairs.length; i++) {
    if (indexPairs[i][0] === k) {
      indexPairs[i][1] = undefined;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


// [[['Steven', 'Seagal'], ['John', 'Stamos']], [], [], [], [], [], [], []]

// 'Steven' --> 0 --> storage[0] --> iterate: find array where [0] = 'Steven' --> return [1] from that array

[[['Steven', 'Seagal']], , , , , , , ]