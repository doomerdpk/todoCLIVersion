const fs=require('fs');
const path=require('path');
const { Command } = require('commander');
const { json } = require('body-parser');
const program = new Command();

let filePath = path.join(__dirname,'todos.json');


program
  .name('to-do cli')
  .description('CLI to add,delete and mark todo as done')
  .version('1.0.0');

//Command Structure to add a todo: perform add-todo -i 1 Deepak 
program.command('add-todo')
  .description('to add a new todo')
  .argument('<string>', 'todo to add')
  .option('-i, --id <int>', 'id of the current todo')
  .action((str, options) => {

    let todos=[];
    const data=fs.readFileSync(filePath,"utf-8");
    if(data)
    {
        todos=JSON.parse(data);
    }
    

    let todo ={
        id:options.id,
        title: str,
        mark: "not done"
    };

    todos.push(todo);

    
    const jsonData = JSON.stringify(todos, null, 2);

    fs.writeFile(filePath,jsonData,(err,data)=>
    {
        if(err)
        {
            console.log("error writing to the file");
        }
        else
        {
            console.log("Successfully addded this todo!");
        }
        
    });
  });


//Command Structure to delete a todo: perform delete-todo 1
program.command('delete-todo')
  .description('to delete a todo from existing to-do list')
  .argument('<int>', 'id to delete the todo present which that id')
  .action((id) => {
    const data=fs.readFileSync(filePath,"utf-8");
    if(data)
    {
        todos=JSON.parse(data);
    }
     todos=todos.filter((todo)=> todo.id!=String(id))

     const jsonData = JSON.stringify(todos, null, 2);

     fs.writeFile(filePath,jsonData,(err,data)=>
     {
         if(err)
         {
             console.log("error writing to the file");
         }
         else
         {
             console.log("Successfully deleted this todo");
         }
         
     });
  });


//Command Structure to mark a todo as done: perform mark-todo 1
program.command('mark-todo')
  .description('to mark a todo as done')
  .argument('<int>', 'id to mark the todo as done')
  .action((id) => {
    const data=fs.readFileSync(filePath,"utf-8");
    if(data)
    {
        todos=JSON.parse(data);
    }
    todos.find(todo => todo.id === "1").mark="done";
    const jsonData = JSON.stringify(todos, null, 2);

     fs.writeFile(filePath,jsonData,(err,data)=>
     {
         if(err)
         {
             console.log("error writing to the file");
         }
         else
         {
             console.log("Successfully marked this todo as done");
         }
         
     });
  });

program.parse(process.argv);