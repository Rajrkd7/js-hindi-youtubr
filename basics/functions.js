// function addtwoNumbers(number1,number2){ // defined two parameter 


//     return number1 + number2
    

// }

// const result = addtwoNumbers(5,9); // passing argument
// console.log("result:"+ result)

function loginusermessage(username="sam"){ //add default value ,if we give values it just overwrites
    return `${username} just logged in` 
}

console.log(loginusermessage("raj"))