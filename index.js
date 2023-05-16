// attach coffee data file into this file
const coffee_data = require('./coffee_data');
// Print an array of all the drinks on the menu.
console.table(coffee_data);

//Print an array of drinks that cost 5 and under.
let coffeeUnderFive = [];
for (let i = 0; i < coffee_data.length; i++) {
  if (coffee_data[i].price <= 5) {
    coffeeUnderFive.push(coffee_data[i]);
  }
}
console.table(coffeeUnderFive);

//Print an array of drinks that are priced at an even number.
let coffeeEvenNumb = [];

for (let i = 0; i < coffee_data.length; i++) {
  if (coffee_data[i].price % 2 === 0) {
    coffeeEvenNumb.push(coffee_data[i]);
  }
}
console.table(coffeeEvenNumb);

// Print the total if you were to order one of every drink.
let coffeeTotal = 0;

for (let i = 0; i < coffee_data.length; i++) {
    coffeeTotal += coffee_data[i].price;
}
console.log("The total cost of menu: " + coffeeTotal);
// Print an array with all the drinks that are seasonal.
let coffeeSeasonal = [];

for (let i = 0; i < coffee_data.length; i++) {
    if (coffee_data[i].seasonal === true) {
        coffeeSeasonal.push(coffee_data[i]);
    }
}
console.table(coffeeSeasonal);
// Print all the seasonal drinks with the words "with imported beans" after the item name. 
// For example: "affogato with imported beans".

let importedBeans = [];

for (let i = 0; i < coffee_data.length; i++) {
    if (coffee_data[i].seasonal === true) {
        importedBeans.push(coffee_data[i].name + " with imported beans");
    }
}

console.table(importedBeans);




