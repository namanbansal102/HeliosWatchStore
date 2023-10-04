import React,{useState} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import styles from '../mycss/navbar.module.css'
import { Link } from 'react-router-dom'



export default function Home() {
  
  return (
   <>
   <Navbar></Navbar>
   
   <div className={styles.homeImage}>
   </div>
   <div className={styles.homeCards}>
    <div className={styles.homeCard}>
        <img src="https://cdn.helioswatchstore.com/production/media/sameday_delivery.png" alt="" />
        <div className={styles.homeCardLeft}>
        <h6>Same Day <br></br> Delievery</h6>
       <Link className={styles.linkCard}>Know More</Link>
        </div>
    </div>
    <div className={styles.homeCard}>
        <img src="https://cdn.helioswatchstore.com/production/media/track_your_order.png" alt="" />
        <div className={styles.homeCardLeft}>
        <h6>Track Your <br></br> Order</h6>
       <Link className={styles.linkCard}>Know More</Link>
        </div>
    </div>
    <div className={styles.homeCard}>
        <img src="https://cdn.helioswatchstore.com/production/media/battery_replacement.png" alt="" />
        <div className={styles.homeCardLeft}>
        <h6>Battery <br></br> Replacement</h6>
       <Link className={styles.linkCard}>Know More</Link>
        </div>
    </div>
    <div className={styles.homeCard}>
        <img src="https://cdn.helioswatchstore.com/production/media/titans_trust.png" alt="" />
        <div className={styles.homeCardLeft}>
        <h6>Titans <br></br> Trust</h6>
       <Link className={styles.linkCard}>Know More</Link>
        </div>
    </div>
    <div className={styles.homeCard}>
        <img src="https://cdn.helioswatchstore.com/production/media/earn_points.png" alt="" />
        <div className={styles.homeCardLeft}>
        <h6>Earn Encircle <br></br> Points</h6>
       <Link className={styles.linkCard}>Know More</Link>
        </div>
    </div>
    
   </div>
   <h3 className={styles.sale}>Watholic Sale</h3>
   <div className={styles.sale}>
    <div className={styles.saleCard}>
      <img src="https://cdn.helioswatchstore.com/production/media/upto_50.jpg" alt="" />
    </div>
    <div className={styles.saleCard}>
      <img src="https://cdn.helioswatchstore.com/production/media/flat_40.jpg" alt="" />
    </div>
    <div className={styles.saleCard}>
      <img src="https://cdn.helioswatchstore.com/production/media/under_20K.jpg" alt="" />
    </div>
    <div className={styles.saleCard}>
      <img src="https://cdn.helioswatchstore.com/production/media/flat_30.jpg" alt="" />
    </div>
   </div>
   <div className={styles.loveEarth}>
    <img src="https://cdn.helioswatchstore.com/production/media/slideshow/cache/1921x411/-loveEarth.jpg" alt="" />
   </div>
   <div className={styles.loveEarth} style={{marginTop:'40px'}}>
    <img style={{height:'50vh'}} src="https://cdn.helioswatchstore.com/production/media/slideshow/cache/1300x300/Desktop-Banner-New.jpg" alt="" />
   </div>
   <Footer></Footer>
   </>
  )
}
