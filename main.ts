#!/usr/bin/env node
import readline from 'readline';
import { modify_file } from './functions';
import { colorLog } from './log_utils';

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to handle user input
function handleUserInput(userInput: string): void {
  if (userInput.toLowerCase() === 'exit') {
    colorLog('Exiting chat...', "red");
    rl.close();
  } else {
    console.log(`You said: ${userInput}`);
    promptUser();  // Keep the chat going
  }
};

// Function to prompt user for input
function promptUser(): void {
  rl.question('You: ', (input: string) => {
    handleUserInput(input);
  });
};


async function main(): Promise<void> {
  // Start the chat
  const hero: string = `@@@@@@@@@@@@@@@
  @@@@@@@@@@@@@@@@@@                                                              @@@
  @@@@@@@@@@@@@@@@@@@         @@@@@@@@@@                        @@@@              @@@@
  @@@@@@@@@  .@@@@@@@@        @@@@  @@@@                        @@@               @@@@
  @@@@@@@      @@@@@@@        @@@@  @@@@  @@@@@@@@ @@@@@@@@   @@@@@    @@@@@@@@@  @@@@@@@@@@  @@@@@@@@   @@@@@@@@   @@@@@@@
  @@@@@          @@@@@@       @@@@@@@@@@  @@@@    @@@@  @@@@    @@@    @@@@  @@@@ @@@@   @@@@@@@@  @@@@  @@@@  @@@@@@@   @@@
  @@@@@@@      @@@@@@@@       @@@@    @@@ @@@@     @@@  @@@@    @@@    @@@    @@@ @@@@    @@@ @@@  @@@@   @@@@@@@ @@@@@  @@@@
  @@@@@@@@@   @@@@@@@@@       @@@@@@@@@@@ @@@@    @@@@ @@@@@@@@@@@@@@@ @@@    @@@ @@@@@@@@@@@@@@@@@@@@@@@    @@@@ @@@@@@@@@@
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
}

main();
