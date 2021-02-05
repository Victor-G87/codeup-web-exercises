console.log("im here")

function someFunctionNoParameters(){
    // Do stuff here
    alert('Hello')
}

// someFunctionNoParameters()

function someFuntionWithParameter(name){
    return alert('hello there,'+ name);
}

someFuntionWithParameter("the entire class")

// var myName = "Victor";
// someFuntionWithParameter(myName)

//A function that returns a value>> assign that value to a variable

function increment(num){
    return num +1;
}
// var four = increment(3);
// var five = increment(increment(3));
// var six = increment(increment(increment(3)));
//
// console.log(four);
// console.log(five);
// console.log(six);

// function multiplyByTwo(num){
//     return num * 2;
// }
// console.log(multiplyByTwo(increment(3)));

// function honkHorn(){
//     return "beep beep"
// }
// console.log(honkHorn());
//

// var honkHorn = function(){
//     return "beep beep"
// }
// console.log(honkHorn());

// function sayHello(name){
//     return alert ('hello there.' + name)
// }
//
// sayHello("mono")

var globalVariable = " globalVariable; Look, im global"

// function scopeExample(){
//     globalVariable ="globalvar im inside the function"
//     var localVar ="localVar : Look, Im local";
//     alert(localVar);
//     alert(globalVariable);
// }
// scopeExample()
// alert(globalVariable)

// IFEE: the first way to put your code behind a gateway
var iffeVar ="im out in the open"
    console.log(iffeVar)
    (function (){

    }




