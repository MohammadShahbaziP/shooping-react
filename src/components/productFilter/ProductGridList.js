import React from 'react'
import { useGlobalState } from '../../context/Context'
import productsTextFiltering from '../../selectors/productsTextFiltering'
import GridItem from './GridItem'
import productBrandSelector from '../../selectors/productBrandSelector'
const ProductGridList =()=>{
    const [{products,filters}]=useGlobalState()
    let altProducts=productBrandSelector(products,filters.brand)
    console.log(altProducts);
    
    altProducts=productsTextFiltering(altProducts,filters.text,filters.brand)

    return (
        <div className="grid">
            {
                altProducts.map((product)=>{
                    return <GridItem key={product.id} {...product} />
                })
            }
        </div>
    )
}
export default ProductGridList