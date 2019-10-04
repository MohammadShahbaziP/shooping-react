const productSelecotr=(products,id)=>{
    
    
    let altProducts=products.find((product)=>product.id===id)
    return altProducts
}

export default productSelecotr