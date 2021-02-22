// console.log("whileloop exercise")
//
// var i = 1;    //initial
// var num = 1; //
// while (i <= 16) {    //condition loops 16 times
//     num *= 2; //
//     i++;
//     console.log(num)
// }


//
// var i = 0;
// var num = 1;
// while (i <= 15) {
//     num *= 2;
//     i++;
//     console.log(num)
// }

//Do While Loop

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
console.log(" you have" + allCones + "to sell for the day")

do{

    var requestCones = Math.floor(Math.random() * 5) + 1;

    if(requestCones <= allCones){
        //this means you can see the cones
        allCones = allCones - requestCones;
        console.log("you sold " + requestCones + " cones, and have " + allCones)
    }else{
        //this means you dont have enough cones to sell
        console.log("sorry i dont have"+ requestCones + 'cones, i only have ' + allCones+ "cones left")
    }

}while (allCones > 0)

console.log("you sold all your cones for the day")

