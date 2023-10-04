import React, { createContext, useContext,useEffect,useState } from 'react'
import Navbar, { bar } from './Navbar'
import styles from '../mycss/specific.module.css'
import { Link, useNavigate } from 'react-router-dom'
import WatchCard from './WatchCard'
import Cartcard from './Cartcard'
import { databaseWatch } from '../App'

const myCartWatch=createContext(null)

export default function Cart() {
  const navigate=useNavigate()
  const {setProgress,total,settotal}=useContext(databaseWatch)
  
  let tota=0;
  const {specificArr}=useContext(databaseWatch)
  const [mylocal, setmylocal] = useState(JSON.parse(localStorage.getItem('cart')))
  useEffect(() => {
  }, [mylocal]);
  console.log("The Values is Local Storage is ",mylocal);
  const handleOrder=(e)=>{
    e.preventDefault();
    if(localStorage.getItem('token')){
      navigate('/order/heliosWatchStore')
    }
    else{
      navigate('/Login')
    }

  }
  return (
    <>
    {JSON.parse(localStorage.getItem('cart')).length===0?<><Navbar></Navbar><div className={styles.cartContainer}>
    <img src="https://www.helioswatchstore.com/media/wysiwyg/empty_card.png" alt="" srcset="" />
    <h1>Your Bag Feels Empty :{"("}</h1>
    <h3>There is Nothing in your Bag.{"\n"}Lets add Some items.</h3>
    <Link onClick={(e)=>{e.preventDefault();setTimeout(() => {

      navigate('/')
    }, 200);}}>
        <button>Continue Shopping</button>
    
        </Link>
</div></>:<>
    <myCartWatch.Provider value={{mylocal,setmylocal}}>
      
    <Navbar></Navbar>
    <div className={styles.toContainer}></div>
    <div className={styles.cartUpper}>
      <div className={styles.ougle}>


    <div className={styles.status}>
        
        <div className={styles.bag}></div>
        <div className={styles.horizontalLine}></div>
        <div className={styles.Address}></div>
        
        <div className={styles.horizontalLine}></div>
        <div className={styles.Payment}></div>
    </div>
    <div className={styles.status_text}>
      <h6>Bag</h6>
      <h6>Address</h6>
      <h6>Payment</h6>
    </div>
      </div>
   
    <img src="https://www.helioswatchstore.com/static/frontend/Codazon/unlimited_sport/en_US/Magento_Checkout/Images/desktop.gif" alt="" srcset="" />
    </div>
    <div className={styles.cartLower}>
    <div className={styles.cartLowerLeft}>
    <div className={styles.cartLowerHeading}>
            <h3>My Shopping Bag ({JSON.parse(mylocal.length)} Items)</h3>
            <h3>Total {mylocal.map((element)=>{
              let {price}=element.findResult[0]
              tota+=price;
              settotal(tota)

            })}&#8377;{total}</h3>
        </div>
        <div className={styles.cartLowerleftList}>
        {mylocal.map((element)=>{
          
          let {imageUrl,title,price,tag1,tag2,tag3}=element.findResult[0]
          console.log("the Title Of Watches is ",title);
          return <Cartcard element={element} imageUrl={imageUrl} title={title} price={price} tag1={tag1} tag2={tag2} tag3={tag3}></Cartcard>
          
          
        })}


        </div>
    </div>
    <div className={styles.cartLowerRight}>
        
        <table>
          <tbody>
          <tr>
              <td><strong>Summary</strong></td>
             
            </tr>
            <tr>
              <td>MRP</td>
              <td>&#8377;{total}</td>
            </tr>
            
            <tr>
              <td>Subtotal</td>
              <td>&#8377;{total}</td>
            </tr>
            <tr>
              <td>Shipping(Free)</td>
              <td>&#8377;0.00</td>
            </tr>
            
            <tr>
              <td>Order Total</td>
              <td>&#8377;{total}</td>
            </tr>
            
            
          </tbody>
        </table>
        <button onClick={handleOrder} className={styles.place_order}>Place Order</button>
    </div>
    </div>
        </myCartWatch.Provider>
    
    </>}
    </>
  )
}
export {myCartWatch};
