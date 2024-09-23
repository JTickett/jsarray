
const isDebugMode = false; // Set to false to disable debug messages

// Log a message to the console if debug mode is enabled
function log(message) {
    if (isDebugMode) {
        console.log(message);
    }
}