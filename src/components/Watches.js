import React, { useContext } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link, useNavigate } from 'react-router-dom'
import WatchCard from './WatchCard'
import styles from '../mycss/watchCard.module.css'
import  {databaseWatch} from '../App'
import Filter from './Filter'

export default function Watches() {
  const navigate=useNavigate()
  const {watchData,url,seturl}=useContext(databaseWatch)
 
  
  return (
    <>
    <Navbar></Navbar>
    <div className={styles.content}>
    
    <div className={styles.filter}><Filter></Filter></div>
    <div className={styles.watchCards}> 
{console.log("The Given array returned is",watchData)}
{watchData.map((element)=>{
  let {_id,imageUrl,title,price,cuttedPrice,tag1,tag2,tag3,tag4}=element
  return <WatchCard _id={_id} imageUrl={imageUrl} title={title} price={price} cuttedPrice={cuttedPrice} tag1={tag1} tag2={tag2} tag3={tag3} tag4={tag4} ></WatchCard>

})}




    </div>
    </div>
    <Footer></Footer>
    </>
  )
}
