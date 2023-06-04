function removeDuplicates(cart) {
    const uniqueItems = [...new Set(cart)];
    return uniqueItems;
  }
  
  // Example usage
  const customerCart = ["Shirt", "Shoes", "Shirt", "Jeans", "Shoes"];
  const newCart = removeDuplicates(customerCart);
  console.log("Cart without duplicates:", newCart);
  