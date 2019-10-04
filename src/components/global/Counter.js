import React from 'react'
import { useGlobalState } from '../../context/Context'

const Counter = ()=>{
    const [{cart}]=useGlobalState()
    return (
        <div className="counter">
            {cart.length}
        </div>
    )
}
export default Counter