import React, {useState} from 'react'
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className="bg-black">
            <div className="lg:flex lg:justify-between md:flex md:justify-between">
                <div className="sm:flex sm:justify-between flex justify-between">
                <div className="text-white sm:inline-block inline-block py-3 px-2">Khalsed Charkie</div>
                <div onClick={() => setIsOpen(!isOpen)} className="text-white lg:hidden md:hidden sm:inline-block inline-block ">22</div>
                </div>
                
                <div className="lg:inline-block md:inline-block  sm:block" >
                    <div className="lg:inline-block md:inline-block sm:block">
                        <NavLink
                            className="text-white py-3 px-2 lg:inline-block md:inline-block sm:block block"
                            to="/"
                            activeClassName="text-white bg-red-700 rounded-xs py-3"
                            exact>
                            Home
                    </NavLink>
                    </div>
                    <div className="lg:inline-block md:inline-block sm:block">
                        <NavLink
                            className="text-white py-3 px-2 lg:inline-block md:inline-block sm:block block "
                            to="/about"
                            activeClassName="text-white bg-red-700 rounded-xs py-3">
                            About
                    </NavLink>
                    </div>
                    
                </div>
            </div>
        </header>
    )
}
