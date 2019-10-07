import React from 'react'
import { Link } from 'react-router-dom'
import { addToCart } from '../../actions/cart'
import { useGlobalState } from '../../context/Context'
import formatMoney from '../../utilites/formatMoney'

const GridItem =(props)=>{
    const [,dispatch]=useGlobalState()
    const handleAddToCart=()=>{
        const{name,id,count,inCart,off,cost,compony,path,body}=props
        dispatch(addToCart({name,id,count,inCart,off,cost,compony,path,body}))
    }

    return (
        <div className="grid-item">
            <img className="grid-item__img" alt={props.name} src={props.path} />
            <h3 className="grid-item__name">{props.name}</h3>
            {
                props.off ? (
                    <div>
                        <p className="card__price--off">{formatMoney(`${props.cost}`)} تومان </p>
                        <span>{props.off}%</span>
                        <p className="card__price--off-actial">{formatMoney(`${props.cost -((props.cost * props.off) / 100)}`)} تومان</p>
                    </div>
                    ) : (
                        <p className="card__price">{formatMoney(`${props.cost}`)} تومان</p> 
                    )
            }
            <div className="flex">
                <Link to={`/overview/${props.id}`} className="btn btn--details ">جزییات</Link>
                <button disabled={props.inCart} className="btn btn--buy " onClick={handleAddToCart} >افزودن به کارت</button>
            </div>
        </div>
    )
}
export default GridItem