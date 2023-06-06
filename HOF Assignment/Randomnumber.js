// Random Number Generator with Delay and Progress Indication:
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Delay in milliseconds
  var delay = 3000;
  
  // Countdown function
  function countdown(seconds) {
    var interval = setInterval(function() {
      console.log("Time remaining: " + seconds + " seconds");
      seconds--;
      if (seconds < 0) {
        clearInterval(interval);
        var randomNumber = generateRandomNumber(1, 100);
        console.log("Random number generated: " + randomNumber);
      }
    }, 1000);
  }
  
  // Delayed random number generation
  setTimeout(function() {
    countdown(delay / 1000);
  }, delay);