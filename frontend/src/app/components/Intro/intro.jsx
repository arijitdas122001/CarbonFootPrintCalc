"use client"
import React, { use, useEffect, useRef } from 'react'
import styles from './intro.module.css'
import { init } from 'ityped'
import Image from 'next/image'
import footer_img from './introimage.jpg'
const intro = () => {
    const textref=useRef();
    useEffect(()=>{
        init(textref.current, { showCursor: false, strings: ['Calculate Your', 'Know About','Explore' ],loop:false })
    },[])
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.text}><span className={styles.sp} ref={textref}></span>
                            <span className={styles.sp}>Carbon Footprint</span></div>
      </div>
      <div className={styles.right}>
        <Image src={ footer_img}  className={styles.img}/>
      </div>
    </div>
  )
}

export default intro
