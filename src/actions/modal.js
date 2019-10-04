export const openModal=(data)=>{
    return {
        type:'OPEN_MODAL',
        data
    }
}
export const closeModal=()=>{
    return {
        type:'CLOSE_MODAL'
    }
}