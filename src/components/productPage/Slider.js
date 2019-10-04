import React from 'react'
import Swiper from 'react-id-swiper'
import "react-id-swiper/lib/styles/css/swiper.css"
import { Link } from 'react-router-dom'
import {useGlobalState} from '../../context/Context'
import productIdSelector from '../../selectors/productIdSelector'

const Slider = () => {
    const params = {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        autoplay:{
            delay:3000
        },
        effect: 'fade',
        loop:true

    }

    const [{products}]=useGlobalState()
    const altProducts = productIdSelector(products,10)

    return (

            <div className="slider">
                <Swiper {...params} >
                {
                    altProducts.map(({path,id})=>{
                        return (
                            <Link to={`/overview/${id}`} key={id}><img className="slider__img" src={path} alt="slider img" /></Link>
                        )
                    })
                }

                </Swiper>
            </div>


    )
}

export default Slider