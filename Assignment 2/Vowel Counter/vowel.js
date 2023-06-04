function countVowels(name) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
  
    for (let i = 0; i < name.length; i++) {
      if (vowels.includes(name[i].toLowerCase())) {
        vowelCount++;
      }
    }
  
    return vowelCount;
  }
  
  // Example usage
  let userInput = prompt("Enter your name:");
  let numberOfVowels = countVowels(userInput);
  console.log("Number of vowels in the name:", numberOfVowels);
  