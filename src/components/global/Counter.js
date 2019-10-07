import React from 'react'
import { useGlobalState } from '../../context/Context'

const Counter = ()=>{
    const [{cart}]=useGlobalState()
    let counter=0
    cart.forEach((item)=>{
        counter += item.count        
    })
    return (
        <div className="counter">
            {counter}
        </div>
    )
}
export default Counter