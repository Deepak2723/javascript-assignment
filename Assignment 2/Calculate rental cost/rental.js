function calculateRentalCost(daysRented, carType) {
    let rentalCost = 0;
  
    switch (carType) {
      case "Economy":
        rentalCost = 4000;
        break;
      case "Midsize":
        rentalCost = 10000;
        break;
      case "Luxury":
        rentalCost = 20000;
        break;
      default:
        return "Invalid car type.";
    }
  
    const totalCost = rentalCost * daysRented;
    return totalCost;
  }
  
  // Example usage
  const daysRented = 7;
  const carType = "Midsize";
  const totalCost = calculateRentalCost(daysRented, carType);
  console.log("Total Rental Cost:", totalCost);
  