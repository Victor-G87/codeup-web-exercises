const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsExp: 12,
        age: 27,
    },
    {
        id: 2,
        name: 'mykel',
        email: 'mykelkovar@gmail.com',
        languages: ['html', 'russian', 'javascript'],
        yearsExp: 7,
        age: 10,
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsExp: 1,
        age: 11,
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsExp: 22,
        age: 90,
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsExp: 9,
        age: 47,
    },
];





let newUsers = users.filter( user => user.languages.length >= 3);

console.log(newUsers);



let userEmail = users.map( user => user.email);


console.log(userEmail);



let newObject = users.reduce( (accumulation, currentObject) => {
    // console.log(currentObject);
    accumulation['object' + currentObject.id] = currentObject;
    return accumulation;

}, {});


console.log(newObject);



let totalYrsExp = users.reduce( (total, user) => {
    total += user.yearsExp;
    return total;
}, 0);

console.log(totalYrsExp);



let longEmail = users.reduce((longest, currentEmail) => {
    return currentEmail.email.length > longest.length ? currentEmail.email : longest;
},"");

console.log(longEmail);



let singleString = users.reduce((x, y) => {
    return `${x},${y.name}`;
}, `Your instructors are: `);
console.log(singleString);












