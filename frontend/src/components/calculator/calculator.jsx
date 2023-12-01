"use client"
import React from 'react'
import { useState } from 'react';
import styles from './calculator.module.css'  
import Link from 'next/link';
import { dark } from '@mui/material/styles/createPalette';
const calculator = () => {
  const [engine, setEngine] = useState('');
  const [cylinders, setCylinders] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [fuelConsumption, setFuelConsumption] = useState('');
  const [result, setResult] = useState(null);
  const handleCalculate = () => {
    // const formData = new FormData();
    // formData.append('engine', engine);
    // formData.append('cylinders', cylinders);
    // formData.append('fuelType', fuelType);
    // formData.append('fuelConsumption', fuelConsumption);
    // try {
    //   const response = await fetch('http://localhost:5000/', {  // Update the URL
    //     method: 'POST',
    //     body: formData,
    //   });
  
    //   // const data = await response.json();
    //   // console.log(data);
    // setResult(data);
    // } catch (error) {
    //   console.error('Error:', error);
    // }
    // setResult(30);
    // console.log("this function is running")
  };
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
          <input type="text" className={styles.input} placeholder='Engine Size(L)' value={engine} onChange={(e)=>setEngine(e.target.value)}/>
          <input type="text" className={styles.input} placeholder='Cylinders' value={cylinders} onChange={(e)=>setCylinders(e.target.value)}/>
          <input type="text" className={styles.input} placeholder='Fuel Type' value={fuelType} onChange={(e)=>setFuelType(e.target.value)}/>
          <input type="text" className={styles.input} placeholder='Fuel Consumtion(L/100km)' value={fuelConsumption} onChange={(e)=>setFuelConsumption(e.target.value)}/>
        </form>
        <button className={styles.btn} onClick={handleCalculate}>Calculate</button>
        <Link href={{
          pathname:'/result',
          query:{res:result}
        }} className={styles.link}>See your Result</Link>
      </div>
      </div>
    </div>
  )
}

export default calculator
