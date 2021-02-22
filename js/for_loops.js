
function showMultiplicationTable(num) {

   for (var i = 1; i <= 10; i++) {
      console.log(num + " x "+ i + " = " + (num * i));
   }
}
showMultiplicationTable(7);





// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random



for(var i = 1 ; i <= 10; i++){
   var random = Math.floor(Math.random() * (200 - 20+ 1) + 20);

   if (random % 2 ===0){
      console.log(random + " is even")
   } if (random % 2 !==0){
      console.log( random + " is odd")
   }

}




for (var outerLoop = 1; outerLoop <=9;outerLoop++){
   var output= '';
   for( var innerLoop = 1;innerLoop <=outerLoop;innerLoop++){
      output = output + outerLoop;
   }
   console.log(output);
}



// var num = "";
// var size = 9;
// for(var i=1; i<=size; i++) {
//    for (var j = 1; j <= size; j++) {
//    }
//    num = num + i
//    console.log(num)
// }
//
//
// for (var i = 0; i <= 100; i=i +5)
//    console.log(i)
//
//
for (var i = 100; i >= 5; i=i -5)
   console.log(i)

// Feb 22 exercise
//
// for (var i = 5; i >= 1; i -= 2){
//    console.log(i)
// }

//Nested for loop


// function outputRec(w,h){
//    for  ( var y = 1 ; y <= h; y++){
//       var output = '';
//       for (var x = 1; x <= w ; x++){
//          output = output + "@";
//
//       }
//
//       console.log(output)
//    }
//
//
// }
// outputRec(10,10)

///time table



// var number =3;
// function showMultiTable(number){
//    for (var i = 1; i <=12;i++){
//       console.log(i + ' x ' + number + ' = '+ (i * number));
//    }
// }
// for (var i = 1; i <= 12; i++){
//    showMultiTable(i)
// }
//
//
//
// for (var i = 1; i <=4;i++){
//    console.log("Ex" + i + ":")
//
//    for(var j =1;j <= 3 ;j++){
//       console.log("set "+ j)
//    }
// }









// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
conesSold = Math.floor(Math.random() * 5) + 1;




//  do {
//
//     allCones - conesSold;
//     alert(allCones - conesSold);
//     allCones-conesSold;
//
//
//
//  } while ( conesSold === 5);
//
//
//
//
// console.log(allCones)
// console.log(conesSold)











