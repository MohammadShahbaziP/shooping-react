export default (state, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: action.text
                }
            }
        case 'CHANGE_BRAND':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    brand:action.brand
                }
            }
        case 'INCREASE_THE_COUNT':
            return {
                ...state,
                cart: state.cart.filter((item) => {
                    if (item.id === action.id) {
                        item.count += 1
                        return true
                    } else {
                        return true

                    }
                })
            }
        case 'DECREASE_THE_COUNT':
            return {
                ...state,
                cart: state.cart.filter((item) => {
                    if (item.id === action.id) {
                        item.count = item.count > 1 ? item.count -= 1 : item.count = 1
                        return true
                    } else {
                        return true
                    }
                })
            }
        case 'CLEAR_CART':
            return {
                ...state,
                products:state.products.filter((product)=>{
                    product.inCart=false
                    return true
                }),
                cart: []
            }
        case 'CLEAR_ITEM':
            return {
                ...state,
                products:state.products.filter((product)=>{
                    if(product.id === action.id){
                        product.inCart=false
                        return true
                    }else{
                        return true
                    }
                }),
                cart: state.cart.filter(item => item.id !== action.id)

            }
        case 'CLOSE_MODAL':
            return {
                ...state,
                modalOpen: false,
                modalData: undefined
            }
        case 'ADD_TO_CART':
            const isInCart = state.cart.find((cartItem) => cartItem.id === action.item.id)
            if (isInCart) {
                return state
            } else {
                
                return {
                    ...state,
                    products:state.products.filter((product)=>{
                        if(product.id === action.item.id){
                            product.inCart=true
                            return true
                        }else{
                            return true
                        }
                    }),
                    cart: [...state.cart, action.item]
                }
            }

        case 'OPEN_MODAL':
            return {
                ...state,
                modalOpen: true,
                modalData: action.data
            }
        case 'SET_PRODUCTS':
            return {
                ...state,
                ...action.state

            }
        default:
            return state
    }
}