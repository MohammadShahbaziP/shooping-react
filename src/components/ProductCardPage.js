import React from 'react'
import { useGlobalState } from '../context/Context'
import CartItem from './CartItem'
import { clearCart } from '../actions/cart'
const ProductCardPage = ()=>{
    const [{cart},dispatch]=useGlobalState()
    const handleClearCart=()=>{
        dispatch(clearCart())
    }
    return (
        <div className="container mt-10">
            {

                cart.map((item)=><CartItem key={item.id} dispatch={dispatch} {...item} />)
            }
            <div className="flex">
                <button onClick={handleClearCart} className="btn btn--buy">خالی کردن کارت</button>
            </div>
        </div>
    )
}
export default ProductCardPage