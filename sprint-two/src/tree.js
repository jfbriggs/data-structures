var Tree = function(value) {
  var newTree = Object.create(treeMethods);

  newTree.value = value;

  newTree.children = [];  

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var flag = false;
  var matchedValue = function(item) { 
    if ( item.value === target ) {
      flag = true;
    }
    for (var i = 0; i < item.children.length; i++) {
      matchedValue(item.children[i]);
    }
  };

  matchedValue(this);
  return flag;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
