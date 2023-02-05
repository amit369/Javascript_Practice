const curry = (a) => {
    return (b) => {
        return a*b;
    }
} 
console.log(curry(3)(4));