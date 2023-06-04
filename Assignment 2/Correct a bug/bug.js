function doubleCartQuantities(cart) {
    const correctedCart = cart.map(quantity => quantity * 2);
    return correctedCart;
  }
  
  // Example usage
  const cart = [1, 2, 3, 4, 5];
  const correctedCart = doubleCartQuantities(cart);
  console.log("Corrected Cart:", correctedCart);
  