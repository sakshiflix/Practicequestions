//Palindrome

let text = "madam";
//Check whether the string is a palindrome.

let reverse = ""
for (let i = text.length - 1; i >= 0; i--) {
    reverse = reverse + text[i]
}

console.log("Reverse:", reverse);

if (text === reverse) {
    console.log("Palindrome");
} else {
    console.log("Not a Palindrome");
}
