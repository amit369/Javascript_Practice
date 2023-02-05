const student = {
    name : "rohan",
    age : 22,
    addreess : "Hazaribagh"
}
// Example of spread operator
let updatedStudent = {...student, name : "amit"};
console.log(updatedStudent);

// example and rest operator
const { name , ...rest} = student;
console.log(rest);