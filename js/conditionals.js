"use strict";

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


function analyzeColor(color){
if (color === 'red') {
    return("Apples are red.");
} else if (color === 'blue') {
    return("sky is blue.");
} else if (color === 'cyan') {
    return("I don't know anything about cyan");
} else {
    return("Not blue, red or cyan");

}
}

console.log(analyzeColor('red'));
console.log(analyzeColor('blue'));
console.log(analyzeColor('cyan'));

//Class examples. note: type in all if statements first then returns after...

// function analyzeColor(color){
//     if (color === 'blue'){
//         return "sky is blue";
//     } else if (color === 'red'){
//         return "cherry is red";
//     }else if (color === 'orange'){
//         return  "oranges are orange";
//     }else{
//         return "i dont know anything about "+ color;
//     }
// }
// // function saved to a variable
// var returnOfFunction = analyzeColor("blue");
// console.log(returnOfFunction);




// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
//Notes to pass is to use variable inside functions "()"
console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
var test = analyzeColor(randomColor)
switch(test) {
    case "purple":
        console.log('purple');
        break;
    case "red":
        console.log('red');
        break;
    case "blue":
        console.log('blue');
        break;
    default:
        console.log(test + '');
        break;
}

//Class Example
function  analyzeColor(color){
    switch (color){
        case 'blue':
            return "  sky is blue"
        case 'red':
            return "ruby is red"
        default:
            return "i dont know anything about "+ color;
    }
}


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var favorite =   analyzeColor(prompt("Enter favorite color:"));
function analyzeColor(favorite) {

    return  ( favorite);
}
console.log(analyzeColor(favorite));
alert("Your favorite color is "+ favorite)



// var fav =prompt('What is your favorite color?', );
//
// function analyzeColor(fav){
//     return  ( fav);
//
// }
// alert(` ${fav} is your favorite!`);{
// }

//Class example

var userColor = prompt("give me a color");
alert(analyzeColor(userColor));



/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


var totalAmount = 100
function calculateTotal(luckyNumber, totalAmount){
    if (luckyNumber === 0){
        return (totalAmount);
    } else if (luckyNumber === 1){
        return (totalAmount * 0.1);
    } else if (luckyNumber === 2){
        return (totalAmount * 0.25);
    } else if (luckyNumber === 3){
        return (totalAmount * 0.35);
    } else if (luckyNumber === 4){
        return (totalAmount * 0.5);
    } else if (luckyNumber === 5){
        return (totalAmount - totalAmount);
    } else {

    }


}
console.log(calculateTotal(3,100));


//Class example, switch version

// function calculateTotal(luckyNumber,totalAmount){
//     switch(luckyNumber){
//         case 0:
//             return; totalAmount;
//         case 1:
//             var discount =(totalAmount *.1);
//             return; totalAmount - discount;
//         case 2:
//             var discount =(totalAmount *.25)
//             return; totalAmount - discount;
//         case 3:
//             return;
//         case 4:
//             return;
//         case 5:
//             return; 0;
//
//
//     }
//
// }
//
// console.log(calculateTotal(luckyNumber,totalAmount));



/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */

// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var totalBill =prompt('How much was your bill?' );
// var totalBill = parseFloat(prompt("Enter a Value", "0"));
// var totalBill = parseInt(prompt("Enter a Value", "0"), 10);
// var calc = calculateTotal(luckyNumber, totalAmount);
alert("Your lucky number is..."+luckyNumber + " !");




if (luckyNumber === 0){
    alert ("Your total is $"+ totalBill+ ", You saved 0$");
} else if (luckyNumber === 1){
    alert ("Your total before discount is $" + (totalBill * 1.1) + " Your New Total is $"+ (totalBill * 0.9 ) );
} else if (luckyNumber === 2){
    alert ("Your total before discount is $" + (totalBill * 1.25) + " Your New Total is $"+ (totalBill * 0.75 ) );
} else if (luckyNumber === 3){
    alert ("Your total before discount is $" + (totalBill * 1.35) + " Your New Total is $"+ (totalBill * 0.65 ) );
} else if (luckyNumber === 4){
    alert ("Your total before discount is $" + (totalBill * 1.50) + " Your New Total is $"+ (totalBill * 0.5 ) );
} else if (luckyNumber === 5){
    alert ("You saved 100%!!!");
} else {

}
// class demo

var luckyNumber = Math.floor(Math.random() * 6);

var usersTotalBill = Number(prompt('what was your totalbill?'));

var discountedBill = calculateTotal(luckyNumber,usersTotalBill)

alert('your lucky number was '+ luckyNumber);
alert('your price before the discount was'+ usersTotalBill)+ 'however with the discount you only have to pay '+ discountedBill + '.');


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */






confirm("Would you like to enter a number?")
var userNumber = prompt("please enter a number")
function userInputInfo(num){
    if (userNumber % 2 !== 0) {
        alert("number entered is even");
    } else (userNumber % 2 === 0);
    alert("number entered is odd");

}

userInputInfo(num)



//class example

var userConfirmed = confirm("would you like to enter a number?");
if (userConfirmed){
    //The user wants to play
    var usersNumber = Number(prompt("give me a number"));

    if ((typeof usersNumber))=== "number"{

    }

    if (userNumber % 2 === 0){
        alert("number is even")
    }else{
        (alert('your number is odd.');
    }

    alert("number plus 100 is "+ (100 + userNumber));

    var numberPosOrNeg = (usersNumber > 0) ? "positive" : "Negative";

    alert ('Your number is' + numberPosOrNeg +".")

}else{
    alert('hey that is not a number!')
    //the user does not want to play
}









///class example

// var userWantsToContinue = confirm("would you like to continue");
//
// if (userWantsToContinue){
//     var usersDay = prompt(' how is your dat going');
//     if ( usersDay ==="good"){
//         console.log("good im glad youre having a good day")
//     } else {
//         console.log("im sorry your having a bad day")
//     }
// }