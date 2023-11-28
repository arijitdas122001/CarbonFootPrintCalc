import React from 'react'
import styles from './calculator.module.css'
const calculator = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.heading}>
        We Can't Save Nature Without You
        </h1>
        <div className={styles.para}>
        Stand up for our natural world with The Nature Conservancy. Every acre we protect, every river mile restored, every species brought back from the brink, begins with you. Calculate Your Carbon FootPrint and take necessary steps as follows
        </div>
      </div>
      <div className={styles.right}>
      <h1 className={styles.heading}>
      Calculate Your Carbon Footprint
      </h1>
      <div className={styles.calc}>
        <form className={styles.form}>
          <input type="text" className={styles.input} placeholder='Engine Size(L)'/>
          <input type="text" className={styles.input} placeholder='Cylinders'/>
          <input type="text" className={styles.input} placeholder='Fuel Type'/>
          <input type="text" className={styles.input} placeholder='Fuel Consumtion(L/100km)'/>
        </form>
        <button className={styles.btn}>Calculate</button>
      </div>
      </div>
    </div>
  )
}

export default calculator
