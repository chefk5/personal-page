import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
import { Icon } from 'react-icons-kit'
import {menu} from 'react-icons-kit/feather/menu'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    let [counter, setCounter] = useState(0)
    return (
        <header className="bg-gradient-to-r from-red-700 to-black">
            <div className="lg:flex lg:justify-between md:flex md:justify-between">
                <div className="sm:flex sm:justify-between flex justify-between">
                <div className="text-white sm:inline-block inline-block py-3 px-2">Khaled Charkie</div>
                <div onClick={() => {setIsOpen(!isOpen); setCounter(counter+1)}} className="text-white lg:hidden md:hidden sm:inline-block inline-block py-3 px-2"><Icon icon={menu}/></div>
                </div>
                
                <div className={"lg:inline-block md:inline-block" + (isOpen? ' sm:block' : ' hidden')} >
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
                            to="/projects"
                            activeClassName="text-white bg-red-700 rounded-xs py-3">
                            Projects
                    </NavLink>
                    </div>
                    
                </div>
            </div>
        </header>
    )
}
