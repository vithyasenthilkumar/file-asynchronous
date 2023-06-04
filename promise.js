const {readFile} = require('fs')

const getTextFromFile = (path) => {
    return new Promise((resolve, reject) =>{
        readFile(path, 'utf-8',(error,data)=> {
            if(error)
            {
                reject(error)
            }
            else
            {
            resolve(data)
            }
        })
    })
}


getTextFromFile('./FSModuleFiles/firstFile.txt','utf-8')
.then(response => console.log(response))
.catch(error => console.log(error))