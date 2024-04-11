
class BankAccount {
    constructor(accountNumber,firstName,lastName) {
        this._accountHolder = accountHolder;
        this._firstName = firstName;
        this._balance = 0;
        this._transactions = [];
    }

    //GET ACCOUNTHOLDER OF THE ACCOUNT
    get accountHolder() {
         return ` FirstName: ${this._firstName}  LastName: ${this._lastName}`;
    }

    //GET ACCOUNTHOLDER OF THE ACCOUNT
    get accountNumber() {
        return this._accountNumber;
    }

    //SHOW ACCOUNT BALANCE IN THE ACCOUNT
    get balance() {
        return this._balance;
    }

    getTransactions(){
        return this._transactions;
    }

    deposit(amount) {
        // amount is added to the balcance
        this._balance += amount;
        const transaction = new Transactions("Deposit", amount);
        this._transactions.push(transaction);
        
    }

    withdraw(amount) {
        if (this._balance >= amount) {
             this._balance -= amount;
            const transaction = new Transactions("Withdraw", amount);
            this._transactions.push(transaction);
            return this._balance;
        } else {
            console.log("Insufficient balance");
            return false;
        }
    }


}

// Transaction Class which contains the Transaction history
class Transactions {
    constructor(type, amount) {
        this._type = type;
        this._amount = amount;
        this._timestamp = new Date();
    }

    get type() {
        return this._type;
    }

    get amount() {
        return this._amount;
    }
    get timestamp(){
        return this._timestamp;
    }
}

const Account1 = new BankAccount(123456789,"Bello","Iyemifokhae");


console.log(Account1.deposit(1000));
console.log(Account1.deposit(500));
console.log(Account1.withdraw(2000));
console.log(Account1.getTransactions());
console.log(`Accoubt balance: ${Account1.balance}`);


// console.log(Account1.accountHolder);
// console.log(Account1.accountNumber);




