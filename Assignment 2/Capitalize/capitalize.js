function capitalizeName(name) {
    let modifiedName = name.charAt(0).toUpperCase() + name.slice(1);
    modifiedName = name[0].toUpperCase() + name.slice(1) : name;
    return modifiedName;
  }
  
  // Example usage
  let userInput = prompt("Enter your name:");
  let capitalizedInput = capitalizeName(userInput);
  console.log(capitalizedInput);
  