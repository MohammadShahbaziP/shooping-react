import React from 'react'
import Slider from './Slider'
import Footer from './Footer'
import BrandDescription from '../productPage/BrandDescription'
const ShppingDashboardPage = () => {

    return (
        <div>
                <Slider />

                <BrandDescription brand={"apple"} country={"AMERICA"} description={"زیبایی و سادگی"} />
                <BrandDescription brand={"samsung"} country={"KOREA"} description={"کیفیت و دوام"} />


            <Footer />
            </div>

    )
}
export default ShppingDashboardPage