// Challenge #6

// What is the difference between the sum of the squares
// of the first ten natural numbers,
// and the square of the sum of the first ten natural numbers?

var sumOfSquare = function() {
  var total = 0;
  for(var i = 1; i <= 10; i++) {
    total += i*i;
  }
  return total;
}

var squareOfSum = function() {
  var total = 0;
  for(var i = 1; i <= 10; i++) {
    total += i;
  }
  total = total*total;
  return total;
}

console.log("The solution is: " + (squareOfSum() - sumOfSquare()));
