const {readFile, writeFile} = require('fs')
console.log('Start');

readFile('./FSModuleFiles/firstFile.txt', 'utf-8' , (error , data) => {
    if(error)
    {
        console.log(error);
    }
    const firstFile = data
    console.log('Variable Assigned 1');


    writeFile('./FSModuleFiles/firstWrittenAndAsyncFile.txt' , `First written async file : ${firstFile}`, (error, data) => {
        if(error)
        {
            console.log(error);
        }
        console.log('Task Completed 1');
    })
})

console.log('Started new Task 1');
console.log('End 1');

readFile('./FSModuleFiles/firstFile.txt', 'utf-8' , (error , data) => {
    if(error)
    {
        console.log(error);
    }
    const firsFile = data
    console.log('Variable Assigned 2');


    writeFile('./FSModuleFiles/firstWritten&AsyncFile.txt' , `First written async file : ${firsFile}`, (error, data) => {
        if(error)
        {
            console.log(error);
        }
        console.log('Task Completed 2');
    })
})


console.log('Started new Task 2');
console.log('End 2');
