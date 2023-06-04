function printNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
      const number = arr[i];
      if (number % 3 === 0 && number % 2 !== 0) {
        console.log(number);
      } else {
        continue;
      }
    }
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  printNumbers(numbers);
  