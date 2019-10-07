import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TiShoppingCart } from 'react-icons/ti'
import Counter from './Counter'
import ShoppingPhone from '../../images/shoppin-phone.png'

const Header = () => {
    // effect for header shrink 
    useEffect(() => {
        const headerScroolEffect = () => {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.querySelector(".header").classList.add('header--shrinked')
            } else {
                document.querySelector(".header").classList.remove('header--shrinked')
            }
        }
        window.addEventListener('scroll',headerScroolEffect)
        return ()=>{
            window.removeEventListener('scroll',headerScroolEffect)
        }
    }, [])

    return (
        <div className="header">
            <div className="container">
                <div className="header__content">
                    <div className='header__brand'>
                        <Link className='header__navbar-item' to='/' >
                            <img src={ShoppingPhone} alt="brand logo" className="header__brand-img" />
                        </Link>
                    </div>
                    <div className='header__navbar'>
                    <Link className='header__navbar-item ' to='/filtering' >جستجو</Link>
                        <Link className='header__navbar-item' to='/'  >صفحه اصلی</Link>
                        <div className="header__cart-container">
                            <Counter />
                            <Link className='header__navbar-item ' to='/product-card' ><TiShoppingCart /></Link>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    )
}
export default Header