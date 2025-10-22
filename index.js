let quote = "...ask not what your country can do for you — ask what you can do for your country.";

//Add code below

// Save the length of the quote
const quoteLength = quote.length;

// Save the twenty-second character in the quote
const twentySecondLetter = quote.charAt(21); // Indexing starts at 0

// Create a string variable named output that contains the quoteLength
let output = `Length: ${quoteLength}`;

// Modify output to also contain the twentySecondLetter between brackets
output += ` [${twentySecondLetter}]`;

// Assign the innerHTML of the HTML element with the id result to the output
document.getElementById("result").innerHTML = output;
