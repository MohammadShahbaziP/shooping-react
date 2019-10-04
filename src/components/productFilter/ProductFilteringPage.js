import React from 'react'
import { useGlobalState } from '../../context/Context'
import { setFilterText, changeBrand } from '../../actions/filters'
import ProductGridList from './ProductGridList'
const ProductFilteringPage =()=>{
    const [{filters},dispatch]=useGlobalState()
    const handleSetFilterText = (e)=>{
        const text = e.target.value
        dispatch(setFilterText(text))
    }
    const handleChangeBrand=(e)=>{
        dispatch(changeBrand(e.target.value))
    }

    return (
        <div className="container mt-10">
                <div className='grid-list__input-group'>
                    <input
                     className='grid-list__input-item'
                     value={filters.text} type='text'
                     onChange={handleSetFilterText}
                     placeholder='Search'
                    />

                        <select className="grid-list__input-item" onChange={handleChangeBrand} value={filters.brand}>
                            <option value="all">همه برند ها</option>
                            <option value="samsung">سامسونگ</option>
                            <option value="apple">اپل</option>
                            <option value="HTC"> اچ تی سی</option>
                        </select>

                </div>
            <ProductGridList />
        </div>
    )
}
export default ProductFilteringPage