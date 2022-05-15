const {readFile, writeFile}= require('fs');

readFile('./content/first.txt','utf8',(err, result)=>{
    if(err){
        return console.log(err);
    }
    const first = result;

    readFile('./content/second.txt','utf8',(error, resultado)=>{
        if(error){
            return console.log(error);
        }
        const seconds = resultado;
        
        writeFile('./content/first.txt',
        `Here is the result: ${first}, ${seconds}`,
        (err, resolve) =>{
            if(err){
                console.log(err);
                return;
            }    
            console.log(resolve);
        }
        );
    });
});