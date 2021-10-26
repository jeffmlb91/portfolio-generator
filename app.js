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

const printProfileData = profileDataArr => {
   profileDataArr.forEach(profileItem => console.log(profileItem));
};
printProfileData(process.argv.slice(2));

const message = 'Hello Node!';


/*if(true === true) {
    const message = 'Hello ES6';
    let sum = 5;
    sum += 10;
    console.log(message);
    console.log(sum);
}

console.log(message);
console.log(sum);*/