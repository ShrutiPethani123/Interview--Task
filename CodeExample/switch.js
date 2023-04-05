a=5
b=4

choice=parseInt(prompt("1. sum\n2. Mul\n3. Div \n4. Sub \nSelect your choice"))

switch(choice)
{
    case 1:
        console.log(`Addition of ${a} and ${b} is ${a+b}`);
        break;
    case 2:
        console.log(`Multiplication of ${a} and ${b} is ${a*b}`);
        break;
    case 3:
        console.log(`Division of ${a} and ${b} is ${a/b}`);
        break;
    case 4:
        console.log(`Substraction of ${a} and ${b} is ${a-b}`);
        break;
    default:
        console.log('Invalid Input!!');
        
}

