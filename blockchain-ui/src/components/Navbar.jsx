import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

function Navbar() {

    const [nav, SetNav] = useState(false);

    const showMobileMenu = () => {
        SetNav(!nav);
    }

    return (
        <>
            <div className="bg-black w-full text-white py-8 md:py-4 sticky top-0">
                <div className="max-w-[1260px] mx-auto flex justify-between items-center">
                    <div>
                        <h1>#DeFi</h1>
                    </div>
                    <div className="items-center hidden md:flex">
                        <ul className="flex justify-between items-center">
                            <li>Market</li>
                            <li>Exchange</li>
                            <li>Activity</li>
                            <li>Community</li>
                            <li><button className="px-5 py-2.5 rounded-full font-medium bg-gradient-to-r from-[var(--primary-blue)] to-[var(--primary-purple)]">Use DeFi</button></li>
                        </ul>
                    </div>

                    {/*Hamburger menu*/}
                    <div onClick={showMobileMenu} className="block md:hidden px-5">
                        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
    
                    </div>

                    {/*Mobile menu*/}
                    <div className={nav ? "transition-all 0.3s ease-in-out absolute w-full bg-black top-[90px] left-0 text-white text-center justify-center flex" : "absolute left-[-100%]"}>
                        <ul>
                            <li className="text-2xl">Market</li>
                            <li className="text-2xl">Exchange</li>
                            <li className="text-2xl">Activity</li>
                            <li className="text-2xl">Community</li>
                            <li><button className="px-7 py-4 rounded-full font-medium mb-5 text-lg nav-btn">Use DeFi</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
