let arr=[1,10,20];
console.log(arr.shift());
console.log(arr.unshift('40'));

let arr2 = [10,20,40,30];
let a = arr2.map((value,index) => {
    return value+1;
}) 
console.log(a);

let a2 = arr2.filter((b) => {
    return b > 10;
})
console.log(a2);

let a3 = arr2.reduce((h1,h2) => {
    return h2+h1
})
console.log(a3);