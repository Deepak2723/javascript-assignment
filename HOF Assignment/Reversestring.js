// Input string
var input = "Hello, world!";

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Delayed string reversal
setTimeout(function() {
  var reversed = reverseString(input);
  console.log(reversed);
}, 2000);
