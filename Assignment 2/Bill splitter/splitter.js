function calculateTotalBill(costPerDish, numberOfPeople) {
    const totalBill = costPerDish * numberOfPeople;
    const billPerPerson = totalBill / numberOfPeople;
  
    const billDetails = {
      totalBill: totalBill,
      billPerPerson: billPerPerson
    };
  
    return billDetails;
  }
  
  // Example usage
  const costPerDish = 1000;
  const numberOfPeople = 4;
  const billDetails = calculateTotalBill(costPerDish, numberOfPeople);
  console.log("Total Bill:", billDetails.totalBill);
  console.log("Bill per Person:", billDetails.billPerPerson);
  