console.log('hello from external javascript');

alert('welcome to my site');

//Prompt
let favoriteColor = prompt('what is your favorite color?');
console.log('your favorite color is ' + favoriteColor)
alert('Great, ' + favoriteColor + ' is my favorite color too!!');


    var littleMermaid = prompt('How many days did you rent the littleMermaid:');
    console.log('The user entered' + littleMermaid);
    var hercules = prompt('How many days did you rent the hercules:');
    console.log('The user entered' + hercules);
    var brotherBear = prompt('How many days did you rent the brotherBear:');
    console.log('The user entered' + brotherBear);
    var moviePrice = 3.00;
    var total = ( littleMermaid ) * (moviePrice) + (hercules) * (moviePrice) + (brotherBear) * (moviePrice);
    alert("My total price is $" + total)

    var googleHours = prompt('How many hours did you work at google:');
    console.log('The user entered' + googleHours);
    var amazonHours = prompt('How many house did you work at amazon:');
    console.log('The user entered' + amazonHours);
    var faceBookHours = prompt('How many hours did you work at facebook:');
    console.log('The user entered' + faceBookHours);
    var gPay = 400;
    var aPay= 380;
    var fPay= 350;
    var totalPay = (googleHours * gPay) + (amazonHours * aPay) + (faceBookHours * fPay);
    alert("My total pay is $" + totalPay)

    var classIsFull = confirm('Is the class you are trying to join full?');
    var hasConflicts = confirm('Do you have a class at 2:30 already?');
    alert('You can join the class is a ' + (!classIsFull && hasConflicts) + ' statement.')


    var hasMoreThanTwoItems = confirm('Do you have more than two items in your cart');
    var isOfferValid = confirm('Is the offter still valid?');
    var premiumMember = confirm('Are you a premium  member?');
    var canUserUseOffer = (hasMoreThanTwoItems || premiumMember) && isOfferValid;
    alert('You can use this offer is a ' + canUserUseOffer + 'statement.');







