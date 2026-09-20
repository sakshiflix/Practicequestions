// Array of Objects — map()

let products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 30000 },
    { name: "Tablet", price: 20000 }
];

// Use map() to create a new array containing only the product names.

let productNames = products.map(product => product.name);

console.log("Product names:", productNames);


//Create another array where every product price is increased by 10%.

let increasedPrices = products.map(product => Math.round(product.price * 1.10))

console.log("Increased Prices:", increasedPrices);