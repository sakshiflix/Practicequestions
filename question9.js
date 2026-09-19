//Second Largest Number

let numbers = [10, 45, 23, 67, 12, 67, 34];

//Find the second largest distinct number.

let largestNumber = Math.max (...numbers)

console.log("Largest number:", largestNumber);

let numbers2 = []

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] != largestNumber) {
        numbers2.push(numbers[i])

    }
}

console.log ("Numbers2:", numbers2)
let largestNumber2 = Math.max (...numbers2);

console.log("Second largest number:", largestNumber2);