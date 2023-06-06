// Original object with prices in USD
var items = {
    item1: 10,
    item2: 20,
    item3: 30,
  };
  
  // Exchange rate from USD to INR
  var exchangeRate = 80;
  
  // Function to convert USD to INR
  function convertToINR(price) {
    return price * exchangeRate;
  }
  
  // Convert prices to INR using map function
  var convertedItems = Object.keys(items).map(function(key) {
    var convertedPrice = convertToINR(items[key]);
    return { item: key, priceINR: convertedPrice };
  });
  
  // Print the converted prices
  console.log(convertedItems);
  