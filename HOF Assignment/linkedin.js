// Input URLs
var urls = [
    "https://www.linkedin.com/in/johndoe123",
    "https://www.linkedin.com/in/mary_smith",
    "https://www.linkedin.com/in/jane_doe-789",
    "https://www.linkedin.com/in/12345",
    "https://www.linkedin.com/in/JohnDoe",
    "https://www.linkedin.com/in/invalid@user",
  ];
  
  // Regular expression for matching valid LinkedIn profile URLs
  var regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
  
  // Validate the URLs
  urls.forEach(function(url) {
    if (regex.test(url)) {
      console.log(url + " is a valid LinkedIn profile URL.");
    } else {
      console.log(url + " is not a valid LinkedIn profile URL.");
    }
  });
  