// Declare an interface called Mountain that contains the following properties:
// name - string
// height - number
// Declare an array called mountains which is an array of type Mountain.
var mountainOne = {
    name: "Kilimanjaro",
    height: 19341
};
var mountainTwo = {
    name: "Everest",
    height: 29029
};
var mountainThree = {
    name: "Denali",
    height: 20310
};
var mountains = [mountainOne, mountainTwo, mountainThree];
// Declare a function called findNameOfTallestMountain. It takes one parameter, an array of Mountain objects. It returns a string, the name of the tallest mountain in the given array.
function findNameOfTallestMountain(mountain) {
    return mountain.reduce(function (a, b) { return a.height > b.height ? a : b; });
}
//Call findNameOfTallestMountain, passing it your mountains array as an argument.
findNameOfTallestMountain(mountains);
//Store the result of the function call (the return value) in a variable and then console.log the variable. 
var tallestMountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain.name);
//Declare an array called products which is an array of type Product.
var products;
// Fill the array with a few products of your own choosing.
products = [
    {
        name: "Tshirts",
        price: 10.99
    },
    {
        name: "Sneakers",
        price: 100.50
    },
    {
        name: "Belts",
        price: 29.99
    },
];
// Declare a function called calcAverageProductPrice. It takes one parameter, an array of Product objects. It returns a number, 
//the average price of all the products provided as an argument.
function calcAverageProductPrice(products) {
    return products.reduce(function (a, b) { return a + b.price; }, 0) / products.length;
}
// Call calcAverageProductPrice, passing it your products array as an argument.
calcAverageProductPrice(products);
// Store the result of the function call (the return value) in a variable and then console.log the variable.
var avg = calcAverageProductPrice(products);
console.log(avg);
// Declare an array called inventory which is an array of type InventoryItem.
var inventory;
inventory = [
    {
        product: {
            name: "motor",
            price: 10.00
        },
        quantity: 10
    },
    {
        product: {
            name: "sensor",
            price: 12.50
        },
        quantity: 4
    },
    {
        product: {
            name: "LED",
            price: 1.00
        },
        quantity: 20
    }
];
// Declare a function called calcInventoryValue. It takes one parameter, an array of InventoryItem objects. It returns a number, the total 
// value of all the products in the inventory array provided as an argument.This is calculated as follows: For each InventoryItem take the 
// product price times the quantity. Add these together for all the items. For the above data, the total will be 10.00 x 10 + 12.5 x 4 + 1.00 * 20 = 170.
function calcInventoryValue(items) {
    return items.reduce(function (a, b) { return a + b.product.price * b.quantity; }, 0);
}
// Call calcInventoryValue, passing it your products array as an argument.
calcInventoryValue(inventory);
// Store the result of the function call (the return value) in a variable and then console.log the variable. (Hint: It prints 170).
var inventoryValue = calcInventoryValue(inventory);
console.log(inventoryValue);
//# sourceMappingURL=tm.js.map