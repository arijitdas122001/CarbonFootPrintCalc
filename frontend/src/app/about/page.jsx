import React from 'react'
import styles from './page.module.css'
import Navbar from '@/components/navbar/navbar'
const About = () => {
  return (
    <>
    <Navbar/>
    <div className={styles.body}>
       <div className={styles.about_section}>
        <div className={styles.inner_container}>
        <h1 className={styles.heading}>About Us</h1>
            <p className={styles.text}>
                A carbon footprint is a concept that has gained significant prominence in recent years as our understanding of environmental sustainability and climate change has deepened. It refers to the total amount of greenhouse gases, primarily carbon dioxide (CO2), and other carbon compounds emitted into the atmosphere as a result of human activities. These emissions are associated with various aspects of our daily lives, including transportation, energy consumption, food production, and more. It is expressed in units of carbon dioxide equivalent (CO2e) and is used to quantify the extent to which a specific activity or entity is responsible for the release of greenhouse gases. The need to measure and reduce carbon footprints has given rise to various initiatives, including carbon accounting, carbon offset programs, and corporate sustainability goals. These efforts aim to raise awareness, drive behavioural changes, and encourage the adoption of more environmentally friendly practices in an attempt to mitigate the consequences of global warming. As individuals and organisations become increasingly conscious of their carbon footprints, they can take steps to reduce emissions through energy efficiency, sustainable transportation choices, responsible waste management, and other eco-friendly practices.
            </p>
            <div className={styles.skills}>
                <span>About us</span>
                <span>Socail Handels</span>
                <span>More Info</span>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default About
