//Test Array
let myArray = [1,2,3,4,5,4,4,4]


function checkArrayForFour(array){
    let newArray=[]
    for (let i = 0; i < array.length; i++) {
        if(array[i]==4){
            newArray.push(array[i])
        }
    }
    console.log(`I can find a total of ${newArray.length} fours`)
}

//Testing the Function
checkArrayForFour(myArray)
