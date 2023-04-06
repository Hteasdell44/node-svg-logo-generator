const inquirer = require('inquirer');
const maxInputLengthPrompt = require('inquirer-maxlength-input-prompt'); 
inquirer.registerPrompt('maxlength-input', maxInputLengthPrompt);

const fs = require('fs');

const {createShape} = require('./lib/shapes');

function init() {

    inquirer.prompt([
        
        {
            name: 'shape',
            message: 'What shape would you like your logo to be?',
            type: 'list',
            choices: ["Circle", "Square", "Triangle"]
        },

        {
            name: 'backgroundColor',
            message: 'What background color should the logo have? (Enter a color by name or hexadecimal.)',
            type: 'input'
        },

        {
            name: 'textColor',
            message: 'What color should the text on the logo be? (Enter a color by name or hexadecimal.)',
            type: 'input'
        },

        {
            name: 'logoText',
            message: 'What would you like the logo text to say? (Please enter 3 characters or less!)',
            type: 'maxlength-input',
            maxLength: 3
        }
    ])

    .then(function(answer) {

        const userShape = createShape(answer);
        fs.writeFile('./logo.svg', userShape.render(), (err) => {
            if (err) throw err;
            console.log(`Generated logo.svg`);
        });
    });
};

init();

