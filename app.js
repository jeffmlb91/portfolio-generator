//const inquirer = require('inquirer');

/*const profileDataArgs = process.argv.slice(2, process.argv.lenght);
console.log(profileDataArgs);

const animalArray = ['dog', 'cat', 'pig'];

animalArray.push('cow');

const personObj = {
    name: 'Geoffrey',
    age: 26
};
personObj.age = 100;
personObj.occupation = 'Developer';
*/


//const message = 'Hello Node!';


/*if(true === true) {
    const message = 'Hello ES6';
    let sum = 5;
    sum += 10;
    console.log(message);
    console.log(sum);
}

console.log(message);
console.log(sum);*/

/*const printProfileData = profileDataArr => {
    profileDataArr.forEach(profileItem => console.log(profileItem));
 };
 printProfileData(process.argv.slice(2));*/


 /*const generatePage = () => 'Name: Geoffrey, Github: Jeffmlb91';

 console.log(generatePage());*/

 // This is the previous code 
 /*const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;

 console.log(generatePage('Geoffrey', 'Github'));*/


 /*const profileDataArgs = process.argv.slice(2, process.argv.lenght);

//const name = profileDataArgs[0];
//const github = profileDataArgs[1];
const [name, github] = profileDataArgs;

const generatePage = ( userName, githubName) => {
    return `
    name: ${userName},
    Github: ${githubName}    
    `
};
console.log(name, github);
console.log(generatePage(name, github));
*/

// this is a allow us to return multiline input

const profileDataArgs = process.argv.slice(2, process.argv.lenght);
const fs = require('fs');

//const name = profileDataArgs[0];
//const github = profileDataArgs[1];
const [name, github] = profileDataArgs;

const generatePage = ( userName, githubName) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0>
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
        </head>

        <body>
            <h1>${name}</h1>
            <h2><a href="https://github.com/${github}">Github</a></h2>
        </body>
    </html>  
    `
};

fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfolio completed! Check out index.html to see the output');
});

