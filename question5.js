// Reverse an Array

// Reverse the array without using .reverse().

let numbers = [1, 2, 3, 4, 5];

let reverseArray = []

for (i = 1; i <= numbers.length; i++) {

    reverseArray.push(numbers[numbers.length - i]);
}

    console.log ("Reverse array:", reverseArray);

