// Array of Objects — filter()

let students = [
    { name: "Amit", marks: 72 },
    { name: "Sakshi", marks: 91 },
    { name: "Rahul", marks: 64 },
    { name: "Priya", marks: 88 },
    { name: "Neha", marks: 55 }
];

//Use filter() to find students who scored 75 or more.

let newArray = students.filter(student => student.marks >= 75);

console.log("Students who scored 75 or more:", newArray);