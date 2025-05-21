// Define a function that generates a greeting
function getGreeting(name) {
    if (name) {
      console.log(`Hello, ${name}! Welcome to Node.js!`);
    } else {
      console.log(`Hello, World! Welcome to Node.js!`);
    }
  }
  
  // Export the getGreeting function so it can be used by other modules.
  // This makes it the primary export of this module.
  module.exports = getGreeting;
  