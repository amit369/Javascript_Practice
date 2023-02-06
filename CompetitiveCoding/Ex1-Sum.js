function addSum(num)
{
    let convertToString = ""+num;
    console.log(convertToString);
    let convertToArray = convertToString.split("").map((num) => {
        return parseInt(num);
    })
    console.log(convertToArray);
    let final_output = convertToArray.reduce((a,b) => a+b);
    if(final_output > 10 )
         addSum(final_output);
    else {
        console.log(final_output);
    }
}

addSum(4444);