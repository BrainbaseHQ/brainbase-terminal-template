#!/usr/bin/env node
// @bun

// main.ts
import readline from "readline";

// log_utils.ts
function colorLog(text, color) {
  const colorCode = ANSIColors[color] || ANSIColors.reset;
  console.log(`${colorCode}${text}${ANSIColors.reset}`);
}
var ANSIColors;
(function(ANSIColors2) {
  ANSIColors2["reset"] = "\x1B[0m";
  ANSIColors2["black"] = "\x1B[30m";
  ANSIColors2["red"] = "\x1B[31m";
  ANSIColors2["green"] = "\x1B[32m";
  ANSIColors2["yellow"] = "\x1B[33m";
  ANSIColors2["blue"] = "\x1B[34m";
  ANSIColors2["magenta"] = "\x1B[35m";
  ANSIColors2["cyan"] = "\x1B[36m";
  ANSIColors2["white"] = "\x1B[37m";
})(ANSIColors || (ANSIColors = {}));

// main.ts
var handleUserInput = function(userInput) {
  if (userInput.toLowerCase() === "exit") {
    colorLog("Exiting chat...", "red");
    rl.close();
  } else {
    console.log(`You said: ${userInput}`);
    promptUser();
  }
};
var promptUser = function() {
  rl.question("You: ", (input) => {
    handleUserInput(input);
  });
};
async function main() {
  const hero = `@@@@@@@@@@@@@@@
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
  const heroLines = hero.split("\n");
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
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
main();
