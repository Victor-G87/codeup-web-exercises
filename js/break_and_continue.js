console.log("in here")




// var userOddNum =prompt("Please enter an odd number between 1 and 50.");
//
// for (var i = userOddNum; i <=50;i++) {
//     if (i % 2 === 0 || i <= 0 || i >= 51) {  //is even
//         prompt("Invalid Number! Please enter an odd number");
//     } if (i % 2 !== 0) { //is odd
//         alert("Valid number ");{ break; }
//     }{ continue}
//     console.log(i)
//
//
// }



var userNumber = Number(prompt(" Give me an odd number between 1 and 50"));

function isNumberInRange(num){
    return num >=1 && num <=50;
}

function isNumberEven(num){
    return num % 2 === 0;
}

while (userNumber % 2 === 0 || !isNumberInRange(userNumber)){
    userNumber = Number(prompt(" Give me an odd number between 1 and 50"));
    if (!isNumberEven(userNumber) && isNumberInRange(userNumber)){
        break;
    }
    userNumber = Number(prompt(" Give me an odd number between 1 and 50"));


}

// console.log("Number to skip" + userNumber);
for (var i = 1 ; i <= 49;i+=2){
    if (i === userNumber){
        console.log("yikes , skipping number:"+ userNumber);
        continue
    }
    console.log("here is an odd number: " + i);
}






