// nn ss bb u
// number nulll string symbol boolean bigint undefined

const item = {
    "harry" : true,
    "shubh" : false,
    "lovish" : 67
}
console.log(item["shubh"]);

const a1= {
   name : "Harry",
   section : 1,
   isPrincipal : false
}
a1['friend'] = "Shubham";
console.log(a1);

for (let i =0;i<10;i++)
{
    console.log(i);
}

let obj = {
    harry : 90,
    shubh : 55,
    shivika : 56,
    ritika : 57,
    shiv : 3
}
for (let a in obj)
{
    console.log("Marks of " + a +" are "+obj[a]);
}