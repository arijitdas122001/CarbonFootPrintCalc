import React from 'react'
import styles from './navbar.module.css'
import { BiSearchAlt, BiLogInCircle } from "react-icons/bi"
import { VscSignIn } from "react-icons/vsc"
const Navbar = () => {
  return (
    <div>
       <nav className={styles.main_nav}>
            <div className={styles.logo}>
                <h2>
                    <span>C</span>arbon
                    <span>F</span>ootprint
                </h2>
            </div>

            <div className={styles.menu_link}>
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

            <div className={styles.login_signup}>
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

        <section className={styles.main}>
            <p></p>
        </section>
    </div>
  )
}

export default Navbar
