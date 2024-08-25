const fs=require('fs');
const path=require('path');
const { Command } = require('commander');
const program = new Command();


program
  .name('count-words')
  .description('CLI to count words in a file')
  .version('1.0.0');

program.command('count')
  .description('Count the number of words in a file')
  .argument('<file>', 'Required file to count number of words inside')
  .action((file) => {
    const filePath=path.join(__dirname,file);
    fs.readFile(filePath,"utf-8",(err,data)=>{
        console.log(data.split(" ").length);
    })
  });

program.parse();

//Structure of the command
//node CountCli.js count argument