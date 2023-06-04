function mixColors(color1, color2) {
    var resultingColor;
  
    switch (color1) {
      case "red":
        switch (color2) {
          case "blue":
            resultingColor = "purple";
            break;
          case "yellow":
            resultingColor = "orange";
            break;
          default:
            console.log("Invalid color combination");
            return;
        }
        break;
      case "blue":
        if (color2 === "yellow") {
          resultingColor = "green";
        } else {
          console.log("Invalid color combination");
          return;
        }
        break;
      default:
        console.log("Invalid color combination");
        return;
    }
  
    console.log("Resulting color:", resultingColor);
  }
  
  // Example usage:
  mixColors("red", "blue"); // Result: purple
  mixColors("blue", "yellow"); // Result: green
  mixColors("red", "yellow"); // Result: orange
  mixColors("green", "blue"); // Invalid color combination
  