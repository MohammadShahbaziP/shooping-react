export const addToCart=(item)=>({
    type:'ADD_TO_CART',
    item
})
export const removeItem=(id)=>({
    type:'CLEAR_ITEM',
    id
}) 
export const increaseTheCount=(id)=>({
    type:'INCREASE_THE_COUNT',
    id
}) 
export const decreaseTheCount=(id)=>({
    type:'DECREASE_THE_COUNT',
    id
}) 

export const clearCart=()=>({
    type:'CLEAR_CART'
}) 