import React from 'react'
import styles from './donation.module.css'
import Image from 'next/image'
const donation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.leftcont}>
         <Image src='/donation.jpg' alt='...' fill={true} className={styles.img}/>
        </div>
        <div className={styles.rightcont}>
            <div className={styles.sub_right_con}>
            <h1 className="heading_don">Protect Nature with a Donation</h1>
            <p className="para_don">Do your part to create a more sustainable future for our planet. Donate today and you’ll be a member, funding urgent direct conservation and advocacy. The power to protect and restore nature—now and for the next generation—is in your hands.</p>
            <button className={styles.button_don}>Know More</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default donation
