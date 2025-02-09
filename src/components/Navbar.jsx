import { Menu, X } from "lucide-react";
import { useState } from "react";
import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import logo from '../assets/images/nexusLogo.png';
import { navItems } from '../constants/index';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    const handleNavItemClick = () => {
        // Close mobile drawer if open
        setMobileDrawerOpen(false);
        // Scroll to top smoothly
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const menuVariants = {
        initial: {
            x: "100%",
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        },
        exit: {
            x: "100%",
            opacity: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    };

    const overlayVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 0.5 },
        exit: { opacity: 0 }
    };

    const menuItemVariants = {
        initial: { y: 20, opacity: 0 },
        animate: i => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        })
    };

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between lg:justify-center items-center">
                    <Link 
                        to="/" 
                        className="flex items-center flex-shrink-0 hover:opacity-80 transition-opacity duration-300"
                        onClick={handleNavItemClick}
                    >
                        <img className='h-9 w-10 mr-0 transition-all duration-300 group-hover:filter group-hover:brightness-125 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' src={logo} alt="logo"/>
                        <span className="text-3xl tracking-tight font-semibold">Nexus</span>
                    </Link>
                    <ul className='hidden lg:flex ml-14 space-x-12'>
                        {navItems.map((item, index) => (    
                            <li key={index}>
                                <Link 
                                    to={item.href}
                                    className="relative py-2 text-white transition-colors duration-300 hover:text-white after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                                    onClick={handleNavItemClick}
                                >{item.label}</Link>
                            </li>
                        ))}
                    </ul>

                    {!mobileDrawerOpen && (
                        <motion.button 
                            onClick={toggleNavbar}
                            className="lg:hidden hover:text-gray-400 transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Menu />
                        </motion.button>
                    )}
                </div>

                <AnimatePresence>
                    {mobileDrawerOpen && (
                        <>
                            <motion.div 
                                className="fixed inset-0 bg-black lg:hidden"
                                variants={overlayVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                onClick={toggleNavbar}
                            />
                            <motion.div 
                                className="fixed right-0 top-0 z-20 bg-neutral-900 w-1/2 h-screen lg:hidden"
                                variants={menuVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                            >
                                <div className="relative p-8 flex flex-col justify-center items-center h-full">
                                    <motion.button 
                                        onClick={toggleNavbar}
                                        className="absolute top-4 right-4 hover:text-gray-400 transition-colors duration-300"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <X size={24} />
                                    </motion.button>
                                    <ul className="space-y-6">
                                        {navItems.map((item, index) => (
                                            <motion.li 
                                                key={index}
                                                custom={index}
                                                variants={menuItemVariants}
                                                initial="initial"
                                                animate="animate"
                                                className="py-3 text-xl"
                                            >
                                                <Link 
                                                    to={item.href}
                                                    className="text-gray-300 transition-colors duration-300 hover:text-white"
                                                    onClick={handleNavItemClick}
                                                >
                                                    {item.label}
                                                </Link>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;