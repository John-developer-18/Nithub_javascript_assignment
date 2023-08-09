document.write('A program that converts Kilograms to Pounds and vice-versa')
const question = prompt('1. Do you want to convert to Kilogram to Pounds?\n2. Pounds to Kilogram?\nChoose a number');

if (question =='1'){
   let numInKilogram = parseInt(prompt('pick a number'));
   let result = numInKilogram * 2.2;
   alert(`The result is ${(result.toFixed(2))} lbs`);
}
else if(question =='2')
{
    let numInPounds = parseInt(prompt('pick a number'));
    let result = numInPounds/2.2;
    alert(`The result is ${(result.toFixed(2))} kg`);
}
