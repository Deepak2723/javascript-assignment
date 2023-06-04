const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;
    const roundedPercentage = discountPercentage.toFixed(2);
  
    return roundedPercentage;
  };
  
  // Example usage
  const originalPrice = 100;
  const discountedPrice = 80;
  const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
  console.log("Discount Percentage:", discountPercentage);
  