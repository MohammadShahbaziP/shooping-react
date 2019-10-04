const productIdSelecotr=(products,endId,startId=0)=>{
    
    
    let altProducts=products.filter((product)=>{
        if(product.id>=startId && product.id<=endId){
            return true
        }else{
            return false
        }
        
    })
    return altProducts
}

export default productIdSelecotr