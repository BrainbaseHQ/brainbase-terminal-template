const colorLog = require("./log_utils")

const run_terminal_command = async (command) => {
    // Implementation...
    colorLog(`Ran terminal command: ${command}`, "cyan")
}

const read_file = async (path) => {
    // Implementation...
    colorLog(`[${path}] Read file`, "yellow")
}

const modify_file = async (path, line_range, code) => {
    // Implementation...
    colorLog(`[${path}:${line_range}] Modified file`, "magenta")
}

module.exports = {
    run_terminal_command,
    read_file,
    modify_file
}