const calculateTotalCost = (cart) => {
    const totalCost = cart.reduce((acc, item) => {
      const itemCost = item.unitPrice * item.quantity;
      return acc + itemCost;
    }, 0);
  
    return totalCost;
  };
  
  // Example usage
  const cart = [
    { unitPrice: 10, quantity: 2 },
    { unitPrice: 5, quantity: 3 },
    { unitPrice: 8, quantity: 1 }
  ];
  
  const totalCost = calculateTotalCost(cart);
  console.log("Total Cost:", totalCost);
  