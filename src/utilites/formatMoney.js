const formatMoney = (money)=>{
    const numbers = money.split('')
    numbers.sort((a,b)=>{
        return -1
    })
    let formated=''
    numbers.forEach((number,index)=>{
        if(index % 3 === 0 && index !== 0){
            formated += `,${number}`
        }else {
            formated += number
        }
    })
    formated = formated.split('').sort((a,b)=>{
        return -1
    }).join('')
    return formated
}
export default formatMoney