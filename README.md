# Brainbase Terminal

Brainbase Terminal is an internal AI worker for Brainbase that helps with running repetitive actions on local files.

## Installing Brainbase Terminal

### Prerequisites

Before you begin, ensure you have Bun installed on your machine. If not, you can download and install it from [Bun official website](https://bun.sh/).

### Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/BrainbaseHQ/brainbase-terminal-template
cd brainbase-terminal-template
```

Since the project uses only built-in Node.js modules, no additional npm installations are required.

### Making the Script Executable

To make the `compiled.mjs` script executable, run the following command:

```bash
chmod +x compiled.mjs
```

### Linking the Package

Link the package globally on your system to run it from anywhere using `bunx`. Navigate to the project directory and run:

```bash
bunx link
```

### Usage

To start the chat application, you can use the following command from anywhere in your terminal:

```bash
bunx brainbase-terminal-template
```

Alternatively, you can also run the script directly using Node.js if you are in the project directory:

```bash
bun compiled.mjs
```

### Exiting the Chat

To exit the chat, simply type `exit` and hit enter. The application will close.

## Access

It it very important that terminal only has access to directories that the user gives it access to. This is done by adding each accessible directory to the `.access` file in root. These are **relative** paths with respect to where the terminal is being called right now.

## Using Terminal

Terminal provides a chat interface for you to explain what kind of functions you want to run.

Here are some examples:

### Create multiple files

```bash
User: I want you to go through all of the files in `/ws/python`, convert them to Javascript and save them to `/ws/javascript`.
```

Following this, Terminal should potentially take the following actions:

```bash
Terminal: [Ran terminal command: cd /ws/python]
Terminal: [Ran terminal command: ls]
Terminal: [Ran terminal command: cat /ws/python/file1.py]
Terminal: [Ran terminal command: echo <JS CODE FOR FILE 1> > /ws/javascript/file1.js] // <- Here Terminal will get an error message that /ws/javascript/file1.js doesn't exist
Terminal: [Ran terminal command: mkdir /ws/javascript]
Terminal: [Ran terminal command: touch /ws/javascript/file1.js]
Terminal: [Ran terminal command: echo <JS CODE FOR FILE 1> > /ws/javascript/file1.js] // <- This time this code will run
Terminal: [Ran terminal command: cat /ws/python/file2.py]
Terminal: [Ran terminal command: touch /ws/javascript/file2.js]
Terminal: [Ran terminal command: echo <JS CODE FOR FILE 2> > /ws/javascript/file2.js] // <- This time this code will run
Terminal: I have created two files in /ws/javascript and wrote the javascript versions of the code to them. Is there anything else I can help with?
```

### Fix errors in a file

```bash
User: I'm getting an error in /ws/error.cpp, can you take a look and let me know what the problem is?
```

Following this, Terminal should potentially take the following actions:

```bash
Terminal: [Ran terminal command: cat /ws/error.cpp]
Terminal: It looks like <ERROR STATEMENT>, would you like me to fix it?
```

```bash
User: Yes please fix it.
```

```bash
Terminal: [/ws/error.cpp] Read file <- Terminal uses the available read_file function because it needs to know the line numbers of each line code to localize the error
Terminal: [/ws/error.cpp:<LINE NUMBER OF ERROR START>-<LINE NUMBER OF ERROR END>] Modified file
Terminal: Okay the error should be fixed now.
```
