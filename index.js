const inquirer = require('inquirer');
const fs = require('fs');

//inquirer
inquirer.prompt(
    [
        {
            type: 'input',
            message: 'What is the title?',
            name: 'title',
            validate: (value)=>{if (value){return true} else {return "must have a value"}}
        },
        {
            type: 'input',
            message: 'How do you install the app?',
            name: 'installation',
            validate: (value)=>{if (value){return true} else {return "must have a value"}}
        },
        {
            type: 'input',
            message: 'Instructions for this installation?',
            name: 'instructions',
            validate: (value)=>{if (value){return true} else {return "must have a value"}}
        },
        {
            type: 'input',
            message: 'Any contributors in this project?',
            name: 'contributions',
            validate: (value)=>{if (value){return true} else {return "must have a value"}}
        },
        {
            type: 'input',
            message: 'What is it used for?',
            name: 'usage',
            validate: (value)=>{if (value){return true} else {return "must have a value"}}
        },
        {
            type: 'input',
            message: 'What license did you use?',
            name: 'license',
            choices:['Apache','GNU', 'BSD', 'GPL', 'N/A'],
            validate: (value)=>{if (value){return true} else {return "must have a value"}}
        },
        {
            type: 'input',
            message: 'Any Questions?',
            name: 'questions',
            validate: (value)=>{if (value){return true} else {return "must have a value"}}
        },
        {
            type: 'input',
            message: 'Github Username',
            name: 'github',
            validate: (value)=>{if (value){return true} else {return "must have a value"}}
        },
        {
            type: 'input',
            message: 'Email',
            name: 'email',
            validate: (value)=>{if (value){return true} else {return "must have a value"}}
        }
    ]
).then
{({
    title,
    installation,
    instructions,
    license,
    github,
    email,
    usage,
    contribution
})=>{
const template = `# ${title}
    ![badge](https://img.shields.io/badge/license-${license}-brightgreen)<br />
    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Questions](#questions)
    - [License](#license)
    ## Installation
    :floppy_disk: ${installation}
    ## Instructions
    ${instructions}
    ## Usage
    :computer: ${usage}
    ## License
    ![badge](https://img.shields.io/badge/license-${license}-brightgreen)
    <br />
    *This application is covered by the ${license} license. 
    ## Questions
    :question: ${questions}<br />
    ## Contributors
    ${contribution}
    <br />
    Find me on GitHub: [${github}](https://github.com/${github})<br />
    <br />
    :email: Email me with any questions: ${email}<br /><br />
    _This README was generated with :heart: by [README-generator]() _
        `;
createNewFile(title,template);}}
function createNewFile(fileName,data){
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join(' ')}.md`,data,(err)=>{
        if(err){
            console.log(err)
        }
        console.log('ReadMe has been generated!')
    })}