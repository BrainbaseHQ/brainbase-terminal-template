# Brainbase Terminal Template

This assignment requires you to create the Brainbase Terminal internal AI worker.

## Introduction

When coding, it's common to hit on a task that needs to get done repeatedly on multiple files. This could be refactoring, commenting, etc. Since these are local files, ChatGPT can't help us here.

Your first task at Brainbase is to follow our motto and *make yourself useless* by making an AI worker that can run in your terminal and run your commands on your local files.

## Installing the template

### Prerequisites

Before you begin, ensure you have Node.js installed on your machine. If not, you can download and install it from [Node.js official website](https://nodejs.org/).

### Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/BrainbaseHQ/brainbase-terminal-template
cd brainbase-terminal-template
```

Since the project uses only built-in Node.js modules, no additional npm installations are required.

### Making the Script Executable

To make the `main.js` script executable, run the following command:

```bash
chmod +x main.js
```

### Linking the Package

Link the package globally on your system to run it from anywhere using `npx`. Navigate to the project directory and run:

```bash
npm link
```

### Usage

To start the chat application, you can use the following command from anywhere in your terminal:

```bash
npx brainbase-terminal-template
```

Alternatively, you can also run the script directly using Node.js if you are in the project directory:

```bash
node main.js
```

### Exiting the Chat

To exit the chat, simply type `exit` and hit enter. The application will close.

## Components

The assignment has the following components:

- `main.js`: Primary part where the terminal chat application runs
- `functions.js`: Some utility functions that need to be implemented for Terminal to be able to interact with the file system (feel free to add more functions as you need)
- `log_utils.js`: Some utility functions for logs (no need to touch)
- `.allowed`: Config file to add the directories Terminal has access to
- `/ws`: Example of a directory that Terminal has access to, with some example files for tests

## Milestones

**This is a challenging assignment.** Therefore you're given the following milestones that get progressively more difficult, and provide necessary structure for how to implement the entire system.

### Milestone 1: Terminal Chat
For Milestone 1, all you need to do is connect the provided application to the OpenAI Assistants API (don't use the regular GPT API) to create a lite version of ChatGPT on the terminal. **No function calling or streaming necessary.**

#### Criteria
- [ ] The OpenAI API is successfully set up.
- [ ] The system is able to keep a conversation going.

### Milestone 2: Talking with your files
For Milestone 2, you need to allow your basic chat app from Milestone 1 to access the files in your local directory.

#### Criteria
- [ ] Function `run_terminal_command` is created
- [ ] Function `run_terminal_command` **can not run a `rm` commands** (this is a very important guardrail)
- [ ] Function `run_terminal_command` **does not run any command** unless the file that's being is under an allowed directory from `.allowed`
- [ ] The necessary functions are created as [tools](https://platform.openai.com/docs/guides/function-calling) **This is very important for the next milestone.** 
- [ ] User can ask Terminal to get contents of files in directories, to create new files, to run arbitrary commands
- [ ] User can run the Python to Javascript conversion test from the main `README.md`
 
### Milestone 3: Reading and modifying files
For the last milestone, you need to allow Terminal to **modify** files.

#### Criteria
- [ ] Function `read_file` is created. This function reads a given file with indexes appended to the beginning, example:
```bash
1. from flask import Flask, render_template, request, redirect, url_for
2. 
3. app = Flask(__name__)
4. 
5. @app.route('/')
6. def home():
7.     return "Hello, Flask!"
8. 
9. @app.route('/hello/<name>')
10. def hello(name):
11.     return f"Hello, {name}!"
12. 
13. if __name__ == '__main__':
14.     app.run(debug=True)
```
**Lines are indexed starting at 1.**
- [ ] Function `modify_file` is created. This function replaces a certain line range in a file with the provided code segment.
- [ ] Before `modify_file` is called, Terminal **must** run the `read_file` action on the same path to see the line numbers. Should throw an error otherwise.
- [ ] Terminal can use these functions to modify files according to instructions (error correction example from main `README.md`)

## Final run
Once all three milestones are succesfully completed, you should now have an AI worker that you can have a conversation with and have it run tasks on your local files.

## Notes
The important thing here isn't that Terminal is able to perfectly run every task, it is that it makes it faster and overall a better experience for us to work with our local files. This symbiosis is what we strive to provide our customers with Brainbase as well.