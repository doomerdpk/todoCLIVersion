//Commander looks after parsing the arguments into options and command-arguments, displays usage errors
//for problems, and implements a help system.
//Commander is strict and displays an error for unrecognised options.

//The program object is destructured from the commander module, providing access to the CLI 
//configuration methods.
const { program } = require('commander');

program
  //This line defines a command-line option --first for the program. 
  //This option is a flag (meaning it doesn't require a value). 
  //If the --first flag is provided when running the program, it will set options.first to true. 
  //If not provided, options.first will be undefined.
  .option('--first')

  //The -s is the shorthand version, and --separator <char> is the long form of the option, 
  //which expects a value (<char>). 
  //When this option is used, the value provided by the user will be available as options.separator.
  .option('-s, --separator <char>');


//This line parses the command-line arguments that were passed to the program. 
//It's necessary to call this method before accessing any options or arguments provided by the user.  
program.parse();

// After parsing, this line retrieves the parsed options from the program object and stores them in
// the options variable.
const options = program.opts();

//sets the value of first flag as 1 or undefined using ternary operator
const limit = options.first ? 1 : undefined;

//program.args -> array of arguments provided while runnning the cli
//.split(separator) : separate a string into array based on separator
//.split(separator,limit) : separate a string into array based on separator from 0 to limit only.
console.log(program.args[1].split(options.separator, limit));