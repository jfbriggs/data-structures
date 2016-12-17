var BinarySearchTree = function(value) {
  var newTree = Object.create(binaryTreeMethods);

  newTree.left = null; 
  newTree.right = null; 
  newTree.value = value;

  return newTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(num) { // O(log n)

  var checkNode = function (node) {
    if (num < node.value) {
      if (node.left === null) {
        node.left = BinarySearchTree(num);
        return;
      } else {
        checkNode(node.left);
      }
    } else {
      if (node.right === null) {
        node.right = BinarySearchTree(num);
        return;
      } else {
        checkNode(node.right);
      }
    }
  };

  checkNode(this);
};

binaryTreeMethods.contains = function(num) { // O(log n)
  var flag = false;

  var checkNode = function (node) {
    if (node === null) {
      return;
    }
    if (node.value === num) {
      flag = true;
      return;
    } else {
      if (num < node.value) {
        checkNode(node.left);
      } else {
        checkNode(node.right);
      }
    }
  };

  checkNode(this);

  return flag;

};

binaryTreeMethods.depthFirstLog = function(cb) { // O(log n)

  var applyFunc = function(node) {

    cb(node.value);
    if (node.left !== null) {
      applyFunc(node.left);
    }

    if (node.right !== null) {
      applyFunc(node.right);
    }

  };

  applyFunc(this);

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
