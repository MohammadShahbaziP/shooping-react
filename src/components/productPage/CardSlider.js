import React from 'react'
import Swiper from 'react-id-swiper'
import "react-id-swiper/lib/styles/css/swiper.css"
import productSelector from '../../selectors/productIdSelector'
import productBrandSelector from '../../selectors/productBrandSelector'
import { useGlobalState } from '../../context/Context'
import { openModal } from '../../actions/modal'
import 'react-id-swiper/lib/styles/css/swiper.css'
import formatMoney from '../../utilites/formatMoney'

const CardSlider = ({ start, end, brand }) => {
    const [{ products }, dispatch] = useGlobalState()
    const altProducts = brand ? productBrandSelector(products, brand) : productSelector(products, end, start)
    const params = {
        slidesPerView: 2,
        spaceBetween: 6,
        // init: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }

    }
    const hanldeOpenModal = (product) => {
        dispatch(openModal({ ...product }))
    }


    return (
        <div className="card-slider">
            <div className="card-slider__container">
                <Swiper {...params}>
                    {
                        altProducts.map((product) => {
                            return (
                                <div onClick={() => hanldeOpenModal(product)} key={product.id} className="card">

                                    <img className="card__img" src={product.path} alt="product" />
                                    <div className="card__details">
                                        <h4 className="card__header">{product.name}</h4>
                                        {
                                            product.off ? (
                                                <div className="card__price">
                                                    <p className="card__price--off">{formatMoney(`${product.cost}`)} تومان </p>
                                                    <span>{product.off}%</span>
                                                    <p className="card__price--off-actial">{formatMoney(`${product.cost - ((product.cost * product.off) / 100)}`)} تومان</p>
                                                </div>
                                            ) : (
                                                    <p className="card__price">{formatMoney(`${product.cost}`)} تومان </p>
                                                )
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>

    )
}
export default CardSlider