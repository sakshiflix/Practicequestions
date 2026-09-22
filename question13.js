// Array of Objects — reduce()

let orders = [
    { item: "Laptop", price: 50000 },
    { item: "Mouse", price: 1000 },
    { item: "Keyboard", price: 2000 },
    { item: "Monitor", price: 15000 }
];

// Use reduce() to calculate the total price of all orders.

let totalPrice = orders.reduce(( total, order) => {
    return total + order.price;
}, 0);

console.log("Total Price:", totalPrice);