const productsTextFiltering = (products,text,brand="all")=>{
    if(text || brand !== "all"){
        products = products.filter((product)=>{
            return product.name.toLowerCase().includes(text.toLowerCase())
        })
    }else{
        products= []
    }
    return products
}
export default productsTextFiltering