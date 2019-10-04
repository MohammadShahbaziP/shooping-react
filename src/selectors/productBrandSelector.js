const productBrandSelector=(state,brand)=>{

    if (brand ==="all"){
        return state
    }else{
        return state.filter(({compony})=>compony===brand)
    }
    
}
export default productBrandSelector