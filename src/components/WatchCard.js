import React, { useEffect, useState } from 'react'
import styles from '../mycss/watchCard.module.css'
import { databaseWatch } from '../App'
import { useNavigate } from 'react-router-dom'

export default function WatchCard(props) {
  const [temp, settemp] = useState(null)
  let {_id,imageUrl,title,price,cuttedPrice,tag1,tag2,tag3,tag4}=props

  const navigate=useNavigate()
  const handleClick=async(e,paramsTitle,paramstag1,paramstag2,paramstag3)=>{
    e.preventDefault();
    console.log('Handle Click Is Running');
    paramsTitle=title;
    paramstag1=tag1;
    paramstag2=tag2;
    paramstag3=tag3;
    navigate(`/watches/${paramsTitle}/${tag1}/${tag2}/${tag3}`)
  }
 
  
  return (
    <div onClick={handleClick} className={styles.WatchCard}><div className={styles.ImageandBut}>
        <img src={imageUrl} alt="" />
        <div className={styles.buttonCardFlex}>
            <i className="fa-regular fa-heart"></i>
            <i class="fa-solid fa-scale-balanced"></i>
        </div>
        </div>
        <div className={styles.nicheHead}>
        <h6>{title} <br></br> {tag1}|{tag2}|{tag3}|{tag4} <br></br><span className={styles.price}>&#8377;{price}</span> <s>&#8377;{cuttedPrice}</s> <span className={styles.off}>(40% off)</span></h6>
         <button className={styles.specific}>Trending</button>

        </div>
        </div>
  )
}
