import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalState } from '../../context/Context'
import { closeModal } from '../../actions/modal'
import { addToCart } from '../../actions/cart'
import formatMoney from '../../utilites/formatMoney'

const Modal = () => {
    const [{ modalOpen, modalData }, dispatch] = useGlobalState()
    const handleCloseModal = (e) => {
        if (e.target === e.currentTarget) {
            dispatch(closeModal())
        }

    }
    const handleAddToCart = () => {
        dispatch(addToCart(modalData))
        dispatch(closeModal())
    }
    if (modalOpen) {
        return (
            <div onClick={handleCloseModal} className="modal">
                <div className="modal__card">
                    <img src={modalData.path} alt={modalData.name} />
                    <div className="modal__body">
                        <h3 className="modal__header">{modalData.name}</h3>

                        {
                            modalData.off ? (
                                <div>
                                    <p className="modal__price">{formatMoney(`${modalData.cost - ((modalData.cost * modalData.off) / 100)}`)} تومان</p>
                                </div>
                            ) : (
                                    <p className="modal__price">{formatMoney(`${modalData.cost}`)} تومان</p>
                            )
                        }
                    </div>
                    <div className="flex" >
                        <button disabled={modalData.inCart} onClick={handleAddToCart} className="btn btn--buy">افزودن به کارت</button>
                        <Link onClick={handleCloseModal} to={`overview/${modalData.id}`} className="btn btn--details">جزییات</Link>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
}
export default Modal