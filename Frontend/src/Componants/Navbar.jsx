import React from 'react'
import './Navbar.css'
/*import { GiHamburgerMenu } from "react-icons/gi"*/
import { BiSearchAlt, BiLogInCircle } from "react-icons/bi"
import { VscSignIn } from "react-icons/vsc"

export const Navbar = () => {
  return (
    <>
        <nav className='main-nav'>
            <div className='logo'>
                <h2>
                    <span>C</span>arbon
                    <span>F</span>ootprint
                </h2>
            </div>

            <div className='menu-link'>
                <ul>
                    <li>
                        <a href='#' target='_WhatWeDo'>what we do</a>
                    </li>
                    <li>
                        <a href='#' target='_AboutUs'>about us</a>
                    </li>
                    <li>
                        <a href='#' target='_ChatBot'>chatbot</a>
                    </li>
                    <li>
                        <a href='#' target='_Donate'>donate</a>
                    </li>
                </ul>
            </div>

            <div className='login-signup'>
                <ul>
                    <li>
                        <a href='#' target='_search'><BiSearchAlt/></a>
                    </li>
                    <li>
                        <a href='#' target='_Login'><BiLogInCircle/></a>
                    </li>
                    <li>
                        <a href='#' target='_SignUp'><VscSignIn/></a>
                    </li>
                </ul>

                {/*<div className='hamburger'>
                    <a href="#">
                        <GiHamburgerMenu/>
                    </a>
                </div>*/}

            </div>
        </nav>

        <section className='main'>
            <p></p>
        </section>
    </>
  )
}

export default Navbar;
