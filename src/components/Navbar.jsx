import React from "react";
import { useState } from "react";

import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

import Logo from '../assets/logo.png'
import Cat from '../assets/cat.png'
import {Link} from 'react-scroll'

function Navbar() {
    const [nav, setNav] = useState(false);
    const handleClick = () => {
        setNav(!nav);
    }

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>
                <img src={Logo} alt="Logo Image" style={{width: '50px'}}/>
            </div>

            {/* Menu */}
            
            <ul className="hidden md:flex">
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500}>
                        Works
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
            

            {/* Open Menu Icon*/}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars></FaBars> : <FaTimes></FaTimes>}
            </div>
            {/* Mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick}  to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick}  to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick}  to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick}  to="work" smooth={true} duration={500}>
                        Works
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick}  to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social Icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                        <a className="w-full text-gray-300 flex justify-between items-center" href="https://www.linkedin.com/in/marcelo-eduardo/" target="_blank">
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                        <a className="w-full text-gray-300 flex justify-between items-center" href="https://github.com/SeaSkyThe" target="_blank">
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
                        <a className="w-full text-gray-300 flex justify-between items-center" href="mailto:marceloer2011@gmail.com" target="_blank">
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
                        <a className="w-full text-gray-300 flex justify-between items-center" href="https://www.cvkeep.com/cv/3f47aa907fe8218f9abd2bdcba369d07" target="_blank">
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>

                </ul>
            </div>

            {/* CAT */}
            <div className="hidden lg:flex fixed flex-col bottom-[0%] right-12">
                <img className="" src={Cat} alt="Cat img" />
            </div>
            
        </div>
        );


}

export default Navbar;