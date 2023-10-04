import React, { useContext,useEffect, useState } from 'react'
import styles from '../mycss/specific.module.css'
import pincode from "pincode-distance"
import cart from '../cart.png'
import { databaseWatch } from '../App'
import Navbar from './Navbar';
import Footer from './Footer';
import { Link, useParams } from 'react-router-dom';
import WatchCard from './WatchCard';


export default function Watch(match) {
  const [heading, setheading] = useState("ADD TO CART")
  const {specificArr}=useContext(databaseWatch)
  
  const [lol, setlol] = useState("Taking as Best Delievery to reach Your Gift To You")
  const handlePin=(e)=>{
    e.preventDefault()
    const Pincode = new pincode();
    console.log(pin);
    let distance = Pincode.getDistance(pin,"125055");
    console.log("The Distance Calculate is :",distance);
    if(distance===-1){
     setlol("Not a Valid pin Code")
    }
    else if(distance===1){
      setlol("Usually Delieverd in One day")
      
    }
    else{
      distance=Math.floor(distance/15);
      setlol(`Standard Delivery Get WithIn ${distance+1} Days`)
    
    }
    
    
  }
  const [pin, setpin] = useState("")
  const [specific, setspecific] = useState([])
  
  const [myimage, setmyimage] = useState("")
  const [price, setprice] = useState("")
  const [cuttedPrice, setcuttedPrice] = useState("")
  const handleCart=(e)=>{
    e.preventDefault();
    console.log("Add To Cart Is Running");
    console.log(specific);
    specificArr.push(specific)
    console.log("the Value of Specific Array is:",specificArr);
    let localSpecific=JSON.stringify(specificArr);
    localStorage.setItem('cart',localSpecific);
    console.log("Item Pushed Succesfully");
    console.log(specificArr.length);
    setheading("ADDED TO CART")
  }
  useEffect(() => {
    const fetchSpecificWatch = async () => {
      console.log('fetcthwatchDatafetchspecific Watch  is Running');
      const host = "http://localhost";
      console.log(" fetchspecific Watch Function running");
      const response = await fetch(`${host}/watches/${url}/${arg1}/${arg2}/${arg3}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const json = await response.json();
      setspecific(json)
      console.log("The Specipic Json Returned is ",specific);
      const imageUrl = json.findResult[0].imageUrl
      setmyimage(imageUrl)
    setprice(json.findResult[0].price)
    setcuttedPrice(json.findResult[0].cuttedPrice)
      console.log(imageUrl);
    };
    fetchSpecificWatch();
  },[])
    const {url,arg1,arg2,arg3}=useParams();
    console.log({url});
  return (
    <>
    <Navbar></Navbar>
    <div className={styles.container}>
      
    <div className={styles.my_Links}>
    <Link to='/' className={styles.my_Links_link}>Home{"\t"}{">"}</Link>
    <Link to='/watches' className={styles.my_Links_link}>Brand Collection {"\t"}{">"}</Link>
    <Link className={styles.my_Links_link}>{url} </Link>
    </div>
    <div className={styles.my_home}>
      <div className={styles.left_my_home}>

      <img src={myimage} alt="" />
      </div>
      <div className={styles.right_my_home}>
        <h2>{url} {arg1} | {arg2} | {arg3}</h2>
        <button className={styles.specific}>Trending</button>
        <h2 className={styles.price}> &#8377;{price} </h2>
        <span className={styles.spano}>Inclusive of All Taxes</span>
        <h5  className={styles.emi}>Earlier Price was &#8377;{cuttedPrice}</h5>
        <button onClick={handleCart} className={styles.cart}>{heading}</button>
        
      <img  className={styles.imageo} src={cart} alt="" />
      <div className={styles.delivery}>
        <div className={styles.myinputpin}>

        <input type="number" onChange={(e)=>{setpin(e.target.value)}} placeholder='Enter Your PinCode Here' />
        <button onClick={handlePin}>Check</button>
        </div>
        <div className={styles.status}>
          <img src="https://cdn.helioswatchstore.com/production/media/wysiwyg/standard-delivery.png" alt="" />
          <h6>{lol}</h6>
        </div>
        <details>
          <h5>Reviews</h5>
        </details>
        
      </div>
      </div>
    </div>
    <h2>More From Calvin Klien</h2>
      <div className={styles.more_from_url}>
        <WatchCard></WatchCard>
        <WatchCard></WatchCard>
        <WatchCard></WatchCard>
        <WatchCard></WatchCard>
        <WatchCard></WatchCard>
      
        </div>
        <h3>More from {arg1}</h3>
      <div className={styles.more_from_url}>
        <WatchCard></WatchCard>
        <WatchCard></WatchCard>
        <WatchCard></WatchCard>
        <WatchCard></WatchCard>
        <WatchCard></WatchCard>
        </div>
        <h3>More from {arg2}</h3>
      <div className={styles.more_from_url}>
        <WatchCard></WatchCard>
        <WatchCard></WatchCard>
        <WatchCard></WatchCard>
        <WatchCard></WatchCard>
        <WatchCard></WatchCard>
        </div>
        <h3>More from Our Top Companies</h3>
      <div className={styles.more_from_url}>
        <div className={styles.company_card}>
          <img className={styles.company_card_image} src="https://cdn.helioswatchstore.com/production/media/codazon_cache/brand/200x200/Amazefit_1.jpg" alt="" />
          <h4>Amazefit</h4>
        </div>
        <div className={styles.company_card}>
          <img className={styles.company_card_image} src="https://cdn.helioswatchstore.com/production/media/codazon_cache/brand/200x200/Anne_Klein_1.jpg" alt="" />
          <h4>Calvin Klien</h4>
        </div>
        <div className={styles.company_card}>
          <img className={styles.company_card_image} src="https://cdn.helioswatchstore.com/production/media/codazon_cache/brand/200x200/brand_logo/Balmain_Square.png" alt="" />
          <h4>Armani Square</h4>
        </div>
        <div className={styles.company_card}>
          <img className={styles.company_card_image} src="https://cdn.helioswatchstore.com/production/media/codazon_cache/brand/200x200/Victorinox_1_1.jpg" alt="" />
          <h4>Victorinox</h4>
        </div>
        <div className={styles.company_card}>
          <img className={styles.company_card_image} src="https://cdn.helioswatchstore.com/production/media/codazon_cache/brand/200x200/brand_logo/XYLYS_Square.png" alt="" />
          <h4>Xylys</h4>
        </div>
        <div className={styles.company_card}>
          <img className={styles.company_card_image} src="https://cdn.helioswatchstore.com/production/media/codazon_cache/brand/200x200/Calvin_Clein_1.jpg" alt="" />
          <h4>Calvin Klien</h4>
        </div>
        <div className={styles.company_card}>
          <img className={styles.company_card_image} src="https://cdn.helioswatchstore.com/production/media/codazon_cache/brand/200x200/Casio_2_.jpg" alt="" />
          <h4>Casio</h4>
        </div>
        </div>
    </div>

    <Footer></Footer>

    </>

  )
}
