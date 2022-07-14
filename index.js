const Container = require('./class.js')
const prodContainer = new Container()
const file = './products.json'

//Get all
const getAllProds = () =>{
    const allProductsArr = prodContainer.read(file);
    return allProductsArr;
}

//Get product by id
const getProdById = (id) =>{
    const allProductsArr = prodContainer.read(file);
    const newProductsArr = allProductsArr.filter((prod) => prod.id == id);
    return newProductsArr
}

//Delete product by id
const delProdById = (id) =>{
    const allProductsArr = prodContainer.read(file);
    const newProductsArr = allProductsArr.filter((prod) => prod.id !== id);
    prodContainer.write(file, newProductsArr);
}


const newProd = {
    title: 'Carpeta',
    price: 456.78,
}
//Add a new product
const addNewProd = (newObj) =>{
    prodContainer.save(file, newObj)
}



//Delete all products
const deleteAll = () =>{
    prodContainer.write(file, '')
}



// let allProducts = getAllProds()
// let prodById = getProdById(2)
// console.log(allProducts);
// console.log(prodById);
// addNewProd(newProd)
// deleteAll()
// delProdById(2)