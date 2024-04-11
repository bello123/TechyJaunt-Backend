# Bank Account Class `TECHYJAUNT/BACKEND ASSIGNMENT`

This JavaScript class represents a simple bank account with features to deposit, withdraw, check balance, and view transaction history.

## Usage

To use the `BankAccount` class, follow these steps:

1. Instantiate a new `BankAccount` object with an account holder name and account number.
2. Use the `deposit()` method to add funds to the account.
3. Use the `withdraw()` method to withdraw funds from the account.
4. Check the account balance using the `balance` property.
5. View transaction history using the `getTransactions()` method.

```javascript
// Example usage:

const Account1 = new BankAccount(123456789,"Iyemifokhae","Bello");

console.log(Account1.deposit(1000));
console.log(Account1.deposit(500));
console.log(Account1.withdraw(2000));
console.log(Account1.getTransactions());
console.log(`Account balance: ${Account1.balance}`);

```

## Class Structure

### BankAccount

- **Constructor:** Creates a new bank account with an account holder name and account number. Initializes balance and transactions.
- **Methods:**
  - `deposit(amount)`: Adds funds to the account and records the transaction.
  - `withdraw(amount)`: Withdraws funds from the account if sufficient balance is available and records the transaction.
  - `getTransactions()`: Retrieves the transaction history.
- **Properties:**
  - `accountHolder`: Returns the account holder's name.
  - `accountNumber`: Returns the account number.
  - `balance`: Returns the current balance of the account.

### Transactions

- **Constructor:** Creates a new transaction object with a type (Deposit or Withdraw), amount, and timestamp.
- **Properties:**
  - `type`: Returns the type of transaction (Deposit or Withdraw).
  - `amount`: Returns the amount involved in the transaction.
  - `timestamp`: Returns the timestamp of the transaction.

