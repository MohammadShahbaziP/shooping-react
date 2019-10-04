import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalState } from '../context/Context'
import productSelector from '../selectors/productSelector'
import { addToCart } from '../actions/cart'
const ProductOverViewPage = (props)=>{
    const [{products},dispatch]=useGlobalState()
    const altProduct=productSelector(products,props.match.params.id) 
    console.log(altProduct);
    const handleAddToCart=()=>{
        dispatch(addToCart(altProduct))

    }
    return (
        <div className="container mt-10 mb-3">
            <div className="details">
                <img className="details__img" src={`../${altProduct.path}`} alt={altProduct.name}/>

                    <h2 className="details__compony">{altProduct.compony}</h2>
                    <h2 className="details__name">{altProduct.name}</h2>

                {
                    altProduct.off ? (
                        <div>
                            <p className="details__price">{altProduct.cost -((altProduct.cost * altProduct.off) / 100)} تومان</p>
                        </div>
                        ) : (
                            <p className="details__price">{altProduct.cost} تومان</p> 
                        )
                } 
                <div className="details__box">
                    <p>وزن : <span>{altProduct.body.weight}</span></p>
                    <p>دوربین : <span>{altProduct.body.camera}</span></p>
                    <p>رنگ : <span>{altProduct.body.color}</span></p>
                
                </div>
                <div className="flex">
                    <button disabled={altProduct.inCart} onClick={handleAddToCart} className="btn btn--buy">افزودن به کارت</button>
                    <Link to="/" className="btn btn--details">صفحه اصلی</Link>
                </div>
            </div>
        </div>
    )
}
export default ProductOverViewPage