const customer = {
    name: "John Doe",
    balance: 5000,
  
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposit of ${amount} successful. New balance: ${this.balance}`);
    },
  
    withdraw(amount) {
      if (amount > this.balance) {
        console.log("Insufficient balance. Withdrawal failed.");
      } else {
        this.balance -= amount;
        console.log(`Withdrawal of ${amount} successful. New balance: ${this.balance}`);
      }
    }
  };
  
  // Example usage
  console.log(`Customer: ${customer.name}`);
  console.log(`Initial balance: ${customer.balance}`);
  
  customer.deposit(2000);
  customer.withdraw(1000);
  customer.withdraw(8000);
  
  