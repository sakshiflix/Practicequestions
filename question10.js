// Copy and Modify Array

let original = [1, 2, 3, 4, 5, 6];

//Create two arrays:

//firstHalf

let MiddleIndex = Math.floor (original.length / 2);

let FirstHalf = original.slice(0, MiddleIndex);

console.log("First Half:", FirstHalf);


//secondHalf

let SecondHalf = original.slice(MiddleIndex, original.length);

console.log("Second Half:", SecondHalf);


//join them back together using concat()

let Result = FirstHalf.concat(SecondHalf);

console.log("Result:", Result);