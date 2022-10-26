// Declare an interface called Mountain that contains the following properties:
// name - string
// height - number
// Declare an array called mountains which is an array of type Mountain.

interface Mountain {
    name: string;
    height: number;
}

let mountainOne = {
    name: "Kilimanjaro",
    height: 19341
}

let mountainTwo = {
    name: "Everest",
    height: 29029
}

let mountainThree = {
    name: "Denali",
    height: 20310
}

let mountains: Mountain [] = [mountainOne, mountainTwo, mountainThree];

// Declare a function called findNameOfTallestMountain. It takes one parameter, an array of Mountain objects. It returns a string, the name of the tallest mountain in the given array.
function findNameOfTallestMountain (mountain: Mountain [] ){
    return mountain.reduce((a, b) => a.height > b.height ? a : b );
}

//Call findNameOfTallestMountain, passing it your mountains array as an argument.
findNameOfTallestMountain(mountains);

//Store the result of the function call (the return value) in a variable and then console.log the variable. 

let tallestMountain: Mountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain.name);

// PRODUCTS
// Declare an interface called Product that contains the following properties:
// name - string
// price - number
interface Product{
    name: string;
    price: number;
}
//Declare an array called products which is an array of type Product.
let products: Product [];

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

function calcAverageProductPrice(products: Product []) {

    return products.reduce((a, b) => a + b.price, 0) / products.length;
}

// Call calcAverageProductPrice, passing it your products array as an argument.
calcAverageProductPrice(products);

// Store the result of the function call (the return value) in a variable and then console.log the variable.
let avg = calcAverageProductPrice(products);
console.log(avg);

// INVENTORY

// Declare an interface called InventoryItem that contains the following properties:
// product - Product (from above)
// quantity - number
interface inventoryItem{
    product: Product;
    quantity: number;

}

// Declare an array called inventory which is an array of type InventoryItem.
let inventory: inventoryItem [];

inventory = [
    {
        product:{
            name: "motor",
            price: 10.00
        },
        quantity: 10
    },
    {
        product:{
            name: "sensor",
            price: 12.50
        },
        quantity: 4
    },
    {
        product:{
            name: "LED",
            price: 1.00
        },
        quantity: 20
    }
];

// Declare a function called calcInventoryValue. It takes one parameter, an array of InventoryItem objects. It returns a number, the total 
// value of all the products in the inventory array provided as an argument.This is calculated as follows: For each InventoryItem take the 
// product price times the quantity. Add these together for all the items. For the above data, the total will be 10.00 x 10 + 12.5 x 4 + 1.00 * 20 = 170.
function calcInventoryValue(items: inventoryItem []): any{
    return items.reduce((a, b) => a + b.product.price * b.quantity , 0);
}

// Call calcInventoryValue, passing it your products array as an argument.
calcInventoryValue(inventory);

// Store the result of the function call (the return value) in a variable and then console.log the variable. (Hint: It prints 170).
let inventoryValue = calcInventoryValue(inventory);
console.log(inventoryValue);







