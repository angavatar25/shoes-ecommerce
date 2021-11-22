import React from 'react'
import firstImage from '../assets/images/image-product-1-thumbnail.jpg'
import deleteIcon from '../assets/images/icon-delete.svg'

export default function checkoutWindow({ active, amount }) {
    const deleteItem = (index) => {
        const tasks = [amount]
            tasks.splice(index, 1)
            return tasks
    }
    const renderCheckoutButton = () => {
        if (amount.length > 0) {
            return (
                <button className="bg-primary w-full text-white leading-loose rounded-md mt-5 py-2">
                    Checkout
                </button>
            )
        } else {
            return (
                <button className="bg-paleOrange w-full text-white leading-loose rounded-md mt-5 py-2">
                    Checkout
                </button>
            )
        }
    }
    const renderCheckoutList = () => {
        if(amount.length > 0) {
            amount && amount.map((index) => {
                    return (
                        <div className="flex justify-between gap-4 mt-3" key={index.id}>
                            <div className="flex">
                                <div className="mr-3">
                                    <img src={firstImage} className=" w-10 h-10 my-auto" alt="" />
                                </div>
                                <div>
                                    <p className="text-gray-400">Fall Limited Edition Sneakers</p>
                                    <p className="text-gray-400">$125.00 x {index.amount} <span className=" text-black font-semibold">${index.total}</span></p>
                                </div>
                            </div>
                            <button className="my-auto" onClick={() => deleteItem(index.id)}>
                                <img src={deleteIcon} alt="" />
                            </button>
                        </div>
                    )
                })
        } else {
            return (
                <p>Checkout cart is empty</p>
            )
        }
    }
    return (
        <div className={`absolute text-left top-32 right-0 bg-white shadow-lg rounded-lg w-96 ${active ? 'block' : 'hidden'}`}>
            <div className="p-4 border-b border-gray-400">
                <p className=" font-semibold">Cart</p>
            </div>
            <div className="p-4">
                {renderCheckoutList()}
                {renderCheckoutButton()}
            </div>
        </div>
    )
}
