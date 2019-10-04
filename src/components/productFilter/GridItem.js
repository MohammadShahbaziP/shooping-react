import React from 'react'
import { Link } from 'react-router-dom'
import { addToCart } from '../../actions/cart'
import { useGlobalState } from '../../context/Context'

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
                        <p className="card__price--off">{props.cost} t </p>
                        <span>{props.off}%</span>
                        <p className="card__price--off-actial">{props.cost -((props.cost * props.off) / 100)} t</p>
                    </div>
                    ) : (
                        <p className="card__price">{props.cost} t</p> 
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