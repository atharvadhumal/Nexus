import {Menu, X} from "lucide-react";
import { useState } from "react";
import React from 'react';
import logo from '../assets/images/nexusLogo.png';
import { navItems } from '../constants/index';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between lg:justify-center items-center">
                    <Link to="/" className="flex items-center flex-shrink-0 hover:opacity-80 transition-opacity duration-300">
                        <img className='h-9 w-10 mr-0 transition-all duration-300 group-hover:filter group-hover:brightness-125 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' src={logo} alt="logo"/>
                        <span className="text-3xl tracking-tight font-semibold">Nexus</span>
                    </Link>
                    <ul className='hidden lg:flex ml-14 space-x-12'>
                        {navItems.map((item, index) => (    
                            <li key={index}>
                                <Link to={item.href}
                                className="relative py-2 text-white transition-colors duration-300 hover:text-white after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                                >{item.label}</Link>
                            </li>
                        ))}
                    </ul>

                    <div className="lg:hidden flex items-center">
                        <button onClick={toggleNavbar}
                        className="hover:text-gray-400 transition-colors duration-300"
                        >
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index)=> (
                                <li key={index} className="py-3 text-xl">
                                    <Link to={item.href}
                                    className="text-gray-300 transition-colors duration-300 hover:text-white"
                                    >{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar