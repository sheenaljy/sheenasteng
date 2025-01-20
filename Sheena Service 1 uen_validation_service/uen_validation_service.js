// UEN Validation Service Implementation

const readline = require('readline');

// Function to validate UEN
function validateUEN(uen) {
    const regex = /^(\d{8}[A-Z]|[STFG]\d{7}[A-Z]|[STFG]\d{9}[A-Z])$/;
    return regex.test(uen);
}

// Command-line interface setup
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("UEN Validation Service\n====================");

// Prompt the user for UEN input
rl.question("Enter a UEN to validate: ", (input) => {
    if (validateUEN(input)) {
        console.log(`The UEN '${input}' is valid.`);
    } else {
        console.log(`The UEN '${input}' is invalid. Please ensure it follows the correct format.`);
    }
    rl.close();
});

module.exports = { validateUEN };
