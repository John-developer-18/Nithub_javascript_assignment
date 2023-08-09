
let evenOrOddChecker = parseInt(prompt('Input a number to check if it is even or odd')) 

evenOrOdd(evenOrOddChecker)

function evenOrOdd(num){
   if(num%2 == 0){
    alert('The number is even')
   }
   else if(num%2 != 0){
    alert('The number is odd')
   }
   else{
     alert('Wo oti su mi')
   }
}


