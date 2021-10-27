const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What us your name?'
        }
    ])
    .then(answers => console.log(answers));

/*const fs = require('fs');
const generatePage = require('./src/page-template');

const pageHTML = generatePage(name, github);

fs.writeFile('index.html', pageHTML, err => {
    if (err) throw err;

    console.log('Portfolio completed! Check out index.html to see the output');
});*/

















/*const fs = require('fs');
const generatePage = require('./src/page-template');

const profileDataArgs = process.argv.slice(2);
//const name = profileDataArgs[0];
//const github = profileDataArgs[1];
const [name, github] = profileDataArgs;


fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw new Error(err);

    console.log('Portfolio completed! Check out index.html to see the output');
});*/









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

