import React,{useEffect,useState} from 'react'
import formatMoney from '../../utilites/formatMoney'

const MoneySummery = ({items})=>{
    const [money,setMoney]=useState(0)
    useEffect(()=>{
        let total=0
        
        items.forEach((item)=>{
            total += (item.cost * item.count)
        })
        setMoney(total)
    },[items])
    return (
        <div className="money-summery">
            {formatMoney(`${money}`)} تومان
        </div>
    )

}

export default MoneySummery