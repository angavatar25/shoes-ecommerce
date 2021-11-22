import React from 'react'
import ImageClose from '../assets/images/icon-close.svg'

export default function MobileMenu({menu, open, closeMethod}) {
    return (
        <div style={{zIndex: '100'}} className={`relative w-full min-h-screen ${open === true ? 'block' : 'hidden'}`}>
            <div style={{zIndex: '100'}} className={`
                bg-black w-full min-h-screen 
            `}>
                <div 
                    className={`
                    bg-white text-left p-6 w-3/5 h-screen
                    `}
                >
                    <img src={ImageClose} alt="" className="mb-10" onClick={closeMethod} />
                    <ul className="menu text-left">
                    {menu.map((index) => {
                        return (
                        <li key={index.id} className="pb-5">
                            <a href="">{index.name}</a>
                        </li>
                        )
                    })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
