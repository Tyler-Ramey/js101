/*
Problem:
  - Write a function that returns true or false on if an inventory item is 
    available. The function takes two arguments, an item id and a list of 
    transactions. Should only return true if the sum of the quantity is more
    than zero
  - Input: an array of objects
  - Output: boolean true or false
  - Rules:
    - If quantity is > 0, return true. Otherwise return false
    - Movement of 'in' increases quantity
    - Movement of 'out' decreases quantity

Examples:
  - See below
  
Data Structure:
  - An array of objects
  
Algorithm:
  - Set a 'quantity' variable to 0
  - Get a list of each of the transactions for the item requested by the arg
    - Use 'transactionsFor'
  - For each of the transactions in the list
    - Check the movement value
      - If value is 'in', add the quantity value to the quantity variable
      - If value is 'out', subtract the quantity value from the quantity var
  - Check the value of 'quantity'
    - If > 0, return true
    - If <= 0, return false
*/

function transactionsFor(ID, transactions) {
  return transactions.filter(object => object.id === ID);
}

function isItemAvailable(ID, transactions) {
  let quantity = 0;
  
  let transactionForID = transactionsFor(ID, transactions);
  
  
  transactionForID.forEach(transaction => {
    if (transaction.movement === 'in') quantity += transaction.quantity;
    else quantity -= transaction.quantity;
  });
  
  return quantity > 0 ? true : false;
}



console.clear();

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

// console.log(transactionsFor(103, transactions));

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true