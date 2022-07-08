const fs = require('fs')

module.exports = class Container {
    constructor (){
    }

    read(file){
        let productsArray= []
        try{
            productsArray = JSON.parse(fs.readFileSync(file, 'utf-8'));
        }catch(err){
            console.log(err)
        }
        return productsArray
    }

    write(file, input){
        try{
            fs.writeFileSync(file, JSON.stringify(input, null, 2))
        }catch(err){
        console.log(err)
        }

}

}