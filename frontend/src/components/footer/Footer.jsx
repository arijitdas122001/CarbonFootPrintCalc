import React from 'react';
import Image from 'next/image'
import styles from './footer.module.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import footer_img from './footer_img.jpg'
const Footer = () => {
  return (   
    <div>
      <div className={styles.container}>
        <div className={styles.topPart}>
       <div className={styles.left}>
         <h3 className={styles.heading}>Explore Us</h3>
          <ul className='List'>
            <li className={styles.listitem}>Our Mission</li>
            <li className={styles.listitem}>Total Fund</li>
            <li className={styles.listitem}>Total Donation</li>
            <li className={styles.listitem}>ChatBot</li>
            <li className={styles.listitem}>Calculator</li>
          </ul>
       </div>
       <div className={styles.middle}> 
       <h3 className={styles.heading}>Connect</h3>
       <h3 className={styles.heading}>Connect</h3>
          <ul className='List'>
            <li className={styles.listitem}>Contact Us</li>
            <li className={styles.listitem}>Helpline</li>
            </ul>
            <div className={styles.socialcont}>
              <div className={styles.Sicons}>
                <InstagramIcon/>
              </div>
              <div className={styles.Sicons}>
                <TwitterIcon/>
              </div>
              <div className={styles.Sicons}>
                <LinkedInIcon/>
              </div>
              <div className={styles.Sicons}>
                <GitHubIcon/>
              </div>
            </div>
          </div>
       <div className={styles.right}>
       <h3 className={styles.heading}>Give Back</h3>
          <ul className='List'>
            <li className={styles.listitem}>Donate</li>
            <li className={styles.listitem}>Recovers Yours House</li>
          </ul>
       </div>
       <div className={styles.signup}>
        <h3 className={styles.heading}>Sign-Up And Connect</h3>
        <div className={styles.contactform}>
            <span>Enter Your Email:</span>
            <input type="text" placeholder='Enter Your Email'/>
            <span>Enter Your Mobile No:</span>
            <input type="text" placeholder='Enter Your ph no' />
            <button className={styles.button}>Sign Up</button>
        </div>
       </div>
       </div>
       <hr />
       <div className={styles.bottomPart}>
        <div className={styles.image_part}>
       <Image src={footer_img}
       height={100}
       width={100}
       />
        </div>
        <div className={styles.Desc}>
          <h3 className={styles.heading}>About Us</h3>
          <div className={styles.desc2}>Environmental Impact Tracker and Awareness Platform:
Build a platform that lets users track their ecological footprint based on their lifestyle choices. Utilize machine learning to analyze data and offer suggestions for reducing their impact. Incorporate interactive visualizations and social sharing features to raise awareness.
</div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Footer
