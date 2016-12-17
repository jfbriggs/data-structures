

// Instantiate a new graph
var Graph = function() {
  this.edges = {};
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) { // constant
  this.nodes[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) { // linear
  for (var key in this.nodes) {
    if (this.nodes[key] === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) { // linear
  delete this.nodes[node];
  for (var key in this.edges) {
    delete this.edges[key][node];
  }
  delete this.edges[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return ( this.edges[fromNode][toNode] === toNode );// constant
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.edges[fromNode] === undefined) {  // constant
    this.edges[fromNode] = {};
  }
  this.edges[fromNode][toNode] = toNode;

  if (this.edges[toNode] === undefined) {
    this.edges[toNode] = {};
  }
  this.edges[toNode][fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) { // constant
  delete this.edges[fromNode][toNode];
  delete this.edges[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) { // linear
  for (var key in this.nodes) {
    cb(this.nodes[key]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

