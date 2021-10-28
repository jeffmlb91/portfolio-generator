const { link } = require('fs');
const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github Username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your Github Username!');
                    return false;
                } 
            }
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:'
        }
    ]);
};
//promptUser().then(answers => console.log(answers));

const promptProject = portfolioData => {

    console.log(`
     =================
     Add a New Project   
     =================
    `);
    
    // If there's no 'projects' array property, create one
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project? (Required)',
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    console.log('Please enter the name of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: ' Provide a description of the project (Required)',
            validate: descriptionInput => {
                if (descriptionInput){
                    return true;
                } else {
                    console.log('Please add a description to your project!');
                    return false;
                }
            }       
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['javascript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the Github link to your project. (Required)',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('Please enter the Github link to your project!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ]).then(projectData => {
        portfolioData.projects.push(projectData);
        if(projectData.confirmAddProject){
            return promptProject(portfolioData);
        }else {
            return portfolioData;
        }
    });
}

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
  });


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

