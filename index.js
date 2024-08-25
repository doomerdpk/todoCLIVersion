//console.log("Hi Deepak!");

//Both are internal libraries/packages so no need to import
const fs=reuire('fs');
const path= require('path');


const filePath=path.join(__dirname,"a.txt");

fs.readFile(filePath,"utf-8",(err,data)=>{
    console.log(data);
})