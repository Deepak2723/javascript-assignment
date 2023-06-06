// Input URL
var input = "https://www.example.com";

// Regular expression for matching valid URLs
var regex = /^(http:\/\/|https:\/\/)[\w\W]+\.[a-zA-Z]+$/;

// Test the input against the regex
if (regex.test(input)) {
  console.log("The URL is valid.");
} else {
  console.log("The URL is not valid.");
}
