import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import CardSlider from './CardSlider'
const BrandDescription = ({ brand, country, description }) => {
    return (
        <div className="branding">
        <div className="container">
            <div className="branding__icons" ><FaAngleRight /></div>
            <h1 className="branding__name">brand : <span>{brand}</span></h1>
            <h2 className="branding__country">{country}</h2>
            <p className="branding__description">{description}</p>  
            <div className="branding__slider">
                <CardSlider brand={brand} />
            </div>
        </div>
        </div>
    )
}
export default BrandDescription