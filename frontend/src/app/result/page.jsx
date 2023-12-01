"use client"
import styles from './result.module.css'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/Footer'
import { useSearchParams } from 'next/navigation'
const Result = () => {
const searchParams = useSearchParams();
const temp=searchParams.get('res');
// console.log(res);
    return (   
        <>
        <Navbar/>
        <div className={styles.section}>
            <div className={styles.container1}>

                <div className={styles.heading}>
                    <center><h1>CO<span>2</span> Emission Predictor</h1></center>
                </div>

                <div className={styles.emission}>
                    <center><p>Your Overall CO<span>2</span> Emission is <b>{temp}</b> kg. </p></center>
                </div>  
            </div> 

            <div className={styles.container2}>

                <div className={styles.heading2}><h2>How To Reduce CO<span>2</span> Emission</h2><hr></hr></div>
            
            </div>
            <div className={styles.container3}>
                <div className={styles.image}></div>
            </div>
            <div className={styles.container4}>
                <div className={styles.content}>
                    <p>
                        <h4>You can reduce your overall CO<span>2</span> emission by making little changes in your day-to-day habits. Here, 
                        are few tips to reduce CO<span>2</span> emission:-</h4>

                        Turn off the lights when natural light is sufficient and when you leave the room. Keep the 
                        temperature system on a moderate setting while you are in the room. Cut down the number of 
                        appliances you are running and you will save big on energy. Many electronics continue using 
                        energy even when powered down, so, use a power strip to easily unplug these electronics when not in use.
                        Power your computer down when you are away. A computer turned off uses at least 65% less energy than a 
                        computer left on or idle on a screen saver. Use the stairs as often as possible instead of elevators.
                        Only do full loads of laundry and use the bright colors cycle whenever possible. Try to take shorter showers. 
                        The less hot water you use, the less energy is needed to heat the water. Compact fluorescent light bulbs (CFLs) 
                        use 75% less energy than incandescent and last up to 10 times longer.
                        
                    </p>
                </div>

            </div>
     
        </div>
        <Footer/>
        </>
        
    )
}

export default Result;