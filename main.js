#!/usr/bin/env node
const readline = require('readline');
const { create_file, write_to_file, modify_file } = require('./functions');

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to handle user input
const handleUserInput = (userInput) => {
    if (userInput.toLowerCase() === 'exit') {
        console.log('Exiting chat...');
        rl.close();
    } else {
        console.log(`You said: ${userInput}`);
        promptUser();  // Keep the chat going
    }
};

// Function to prompt user for input
const promptUser = () => {
    rl.question('You: ', (input) => {
        handleUserInput(input);
    });
};

// Start the chat
const hero = `@@@@@@@@@@@@@@@                                                                                                            
@@@@@@@@@@@@@@@@@@                                                              @@@                                        
@@@@@@@@@@@@@@@@@@@         @@@@@@@@@@                        @@@@              @@@@                                       
@@@@@@@@@  .@@@@@@@@        @@@@@@@@@@                        @@@               @@@@                                       
@@@@@@@      @@@@@@@        @@@@@@@@@@  @@@@@@@@ @@@@@@@@   @@@@@    @@@@@@@@@  @@@@@@@@@@  @@@@@@@@   @@@@@@@@   @@@@@@@  
@@@@@          @@@@@@       @@@@@@@@@@  @@@@    @@@@  @@@@    @@@    @@@@  @@@@ @@@@   @@@@@@@@  @@@@  @@@@ @@@@@@@@   @@@ 
@@@@@@@      @@@@@@@@       @@@@    @@@ @@@@     @@@@@@@@@    @@@    @@@    @@@ @@@@    @@@ @@@@@@@@@   @@@@@@@ @@@@@@@@@@@
@@@@@@@@@   @@@@@@@@@       @@@@@@@@@@@ @@@@    @@@@@@@@@@@@@@@@@@@@ @@@    @@@ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@@@@@@@@
 @@@@@@@@@@@@@@@@@@@@       @@@@@@@@@@  @@@@     @@@@@@ @@@@@@@@@@@@ @@@    @@@ @@@@@@@@@@  @@@@@@ @@@@@@@@@@@@   @@@@@@@  
   @@@@@@@@@@@@@@@@@@                                                                                                      
     @@@@@@@@@@@@@@@@                                                                                                      `;

// Type out the hero line by line
const heroLines = hero.split('\n');
let i = 0;
const interval = setInterval(() => {
    console.log(heroLines[i]);
    i++;
    if (i === heroLines.length) {
        clearInterval(interval);
        console.log(``);
        console.log(`I'm Brainbase Terminal. My job is to run repetitive tasks on your files. Any directory that you want me to access, you need to put in the .allowed file. Type "exit" to leave the chat.`);
        
        promptUser();
    }
}, 100);