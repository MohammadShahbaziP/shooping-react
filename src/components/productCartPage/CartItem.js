import  React from 'react'
import { FaArrowDown,FaArrowUp,FaTrash } from 'react-icons/fa'
import { removeItem, increaseTheCount, decreaseTheCount } from '../../actions/cart'
import formatMoney from '../../utilites/formatMoney'
const CartItem=(props)=>{
    const handleRemoveItem=()=>{
        props.dispatch(removeItem(props.id))
    }
    const handleIncreaseTheCount=()=>{
        props.dispatch(increaseTheCount(props.id))
    }
    const handleDecreaseTheCount=()=>{
        props.dispatch(decreaseTheCount(props.id)) 
    }
    return (
        <div className="cart-item">
            <img className="cart-item__img" src={props.path} alt={props.name}/>
            <h2 className="cart-item__name">{props.name}</h2>
            <p className="cart-item__price">{formatMoney(`${props.cost -((props.cost * props.off) / 100)}`)} تومان</p>
            <div className="cart-item__counter">
            <FaArrowUp className="hover" onClick={handleIncreaseTheCount} />
            <span>{props.count}</span> 
            <FaArrowDown className="hover" onClick={handleDecreaseTheCount}  />
            </div>
            <FaTrash className="hover"  onClick={handleRemoveItem} />
        </div>
    )
}
export default CartItem