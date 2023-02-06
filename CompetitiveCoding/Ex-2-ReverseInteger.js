function reverse(num)
{
    if(num<0) return (-1) * reverse(-num);
let n = (num+"").split("").reverse().join('');
return ( n > 2**31 -1)? 0 : n
}
console.log(reverse(1000));