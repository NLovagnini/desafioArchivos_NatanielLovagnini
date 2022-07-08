const Container = require('./class.js')

//Get all
const getAllProds = () =>{
    const container = new Container();
    const file = './products.json';
    const allProductsArr = container.read(file);
    return allProductsArr;
}

//Get product by id
const getProdById = (id) =>{
    const container = new Container();
    const file = './products.json';
    const allProductsArr = container.read(file);
    const newProductsArr = allProductsArr.filter((prod) => prod.id == id);
    return newProductsArr
}

//Delete product by id
const delProdById = (id) =>{
    const container = new Container();
    const file = './products.json';
    const allProductsArr = container.read(file);
    const newProductsArr = allProductsArr.filter((prod) => prod.id !== id);
    container.write(file, newProductsArr);
}


//Add a new product
let lastId
const addNewProd = () =>{
    const container = new Container();
    const file = './products.json';
    const allProductsArr = container.read(file);
    const newObj ={
        title: 'Carpeta',
        price: 456.78,
    }
    const firstId = allProductsArr[allProductsArr.length-1].id+1
    
    //Gracias a este if, podemos asegurarnos de que los ID de los productos no se repitan y sean siempre crecientes.
    if(firstId < lastId){
        newObj.id = lastId
    } else {
        newObj.id = firstId
    }
    lastId = newObj.id
    
    allProductsArr.push(newObj)
    container.write(file, allProductsArr)
}

//Delete all products
const deleteAll = () =>{
    const container = new Container ();
    const file = './products.json';
    container.write(file, '')
}



// let allProducts = getAllProds()
// let prodById = getProdById(2)
// console.log(allProducts);
// console.log(prodById);
// addNewProd()
// deleteAll()
// delProdById(2)