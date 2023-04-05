/*

Types of loops: 4

for
while
do while
for in

*/

for(let i=1;i<5;i++)
{
    console.log(i);  
}

// print odd number between 1 to 10
console.log('----------------------------------------------');

let j=1
while (j<10)
{
    console.log(j);
    j+=2
    
}

console.log('----------------------------------------------');

// print multiplication table using do while
let k=1
let n=5

do{
    console.log(`${n} * ${k} = ${n*k}`);
    k++;
}while(k<=10)

console.log('----------------------------------------------');


a={1:'ram',2:'shyam',3:'raj'}

for(i in a)
{
    console.log(i , a[i]);
    
}