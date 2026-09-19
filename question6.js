// Remove Elements Using splice()

let numbers = [10, 20, 30, 40, 50, 60, 70, 80];


//Remove the first 2 elements.

numbers.splice(0,2)

console.log("numbers after removing first 2 elements:", numbers);


//Remove 2 elements from the middle.

let middleIndex = Math.floor(numbers.length / 2)
numbers.splice(middleIndex - 1, 2)

console.log("Numbers after removing 2 elements from middle:", numbers);


// Remove the last 2 elements.

numbers.splice(-2)
console.log ("Numbers after removing last 2 elements:", numbers);