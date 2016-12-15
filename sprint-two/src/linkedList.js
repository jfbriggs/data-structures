var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.values = {};

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
    }
    if (list.tail === null) {
      list.tail = newNode;
    }
    list.tail.next = newNode;
    list.tail = newNode;
    list.values[(newNode.value).toString()] = newNode.value;

  };

  list.removeHead = function() {
    var currentHead = list.head.value;
    if (list.head !== null) {
      var newHead = list.head.next;
      delete list.head;
      list.head = newHead;
    }
    delete list.values[currentHead.toString()];
    return currentHead;
    
  };

  list.contains = function(target) {
    var flag = false;
    for (var item in list.values) {
      if (+item === target) {
        flag = true;
      }
    }
    return flag;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 // addToTail = constant
 // removeHead = constant
 // contains =  linear [O(n)]
