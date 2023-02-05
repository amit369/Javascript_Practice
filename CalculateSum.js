function addData  (data)
{
    let convertToString = ""+data;
    let convertToArray = convertToString.split('').map((data) => {
        return parseInt(data);
    })
    let finaloutput = convertToArray.reduce((a,b) => a+b)
    if(finaloutput >= 10)
    {
        addData(finaloutput);
    }
    else {
        console.log(finaloutput);
    }
}

console.log(addData(4444));