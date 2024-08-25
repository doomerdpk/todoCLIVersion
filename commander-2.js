//This line imports the Command class from the commander module, 
//which is a popular Node.js package for creating command-line interfaces.
const { Command } = require('commander');
//This line creates a new instance of the Command class and stores it in the program variable.
const program = new Command();

program
   //This line sets the name of the CLI application to 'string-util'. This is the name that will be 
   //displayed in help messages
  .name('string-util')

  //This line sets the description of the CLI application. This description will appear in the 
  //help message, giving users an overview of what the program does.
  .description('CLI to some JavaScript string utilities')

  //This line sets the version number of the CLI application to '0.8.0'. The version can be displayed 
  //using the --version flag when the program is run.
  .version('0.8.0');


//This line defines a new command called 'split' within the CLI application. 
//This command will be used to split a string into substrings. 
//The .command() method is used to define subcommands in a CLI application.  
program.command('split')
  //This line sets the description for the 'split' command.
  // This description will appear in the help message for the 'split' command, explaining what it does.
  .description('Split a string into substrings and display as an array')

  //This line defines a required argument for the 'split' command. The argument is named <string>, 
  //and it represents the string that the user wants to split. 
  //The description 'string to split' provides context about what the argument is.
  .argument('<string>', 'string to split')

  //This line adds an option to the 'split' command. 
  //The --first option is a flag (boolean) that, when provided, will indicate that only the first 
  //substring should be displayed. 
  //If this flag is not provided, all substrings will be displayed.
  .option('--first', 'display just the first substring')

  //This line adds another option to the 'split' command. 
  //The -s (short) and --separator (long) option allows the user to specify the character to be used 
  //as the separator for splitting the string. 
  //The <char> indicates that this option expects a value. 
  //The default value for this option is set to a comma ,.
  .option('-s, --separator <char>', 'separator character', ',')

   //This line defines the action to be taken when the 'split' command is executed.
  .action((str, options) => {
    //sets the value of first flag as 1 or undefined using ternary operator
    const limit = options.first ? 1 : undefined;
    //.split(separator) : separate a string into array based on separator
    //.split(separator,limit) : separate a string into array based on separator from 0 to limit only.
    console.log(str.split(options.separator, limit));
  });

program.parse();

//Command structure default spearator as comma and without default separator
//node commander-2.js split Hello,This,is,Deepak
//node commander-2.js split Hello,This,is,Deepak -s ,