import React, { useContext, useState } from 'react'
import styles from '../mycss/filter.module.css'
import { useActionData } from 'react-router-dom'
import { databaseWatch } from '../App'
import Navbar from './Navbar'

export default function Order() {
    const [name, setname] = useState("")
    const [contact, setcontact] = useState(null)
    const [address, setaddress] = useState("")
    const [email, setemail] = useState("")
    const {total}=useContext(databaseWatch)
    console.log("Your Total is:",total);
  return (
<>
<Navbar></Navbar>
    <div className={styles.container}>
       
        <div className={styles.enter_details}>
        <div>
            <img className={styles.place_order_image} src="https://lh3.googleusercontent.com/p/AF1QipPemBDg_u2mtRHLPbCT8qFDwRlpe0WURfMhlBLH=w1080-h608-p-no-v0" alt="" srcset="" />
        </div>
        <div className={styles.thando}>

            <div>

            <label htmlFor="name">Enter Your Name Please</label>
            <input onChange={(e)=>{setname(e.target.value)}} type="text" id='name' placeholder='Name' />
            </div>
            <div>

            <label htmlFor="name">Contact Number</label><br></br>
            <input onChange={(e)=>{setcontact(e.target.value)}} type="numver" maxLength={10} id='name' placeholder='Contact' />
            </div>
            <div>
                
            <label htmlFor="name">Enter Address</label><br></br>
            <input onChange={(e)=>{setaddress(e.target.value)}} type="text" id='name' placeholder='Address' />
            </div>
            <div>

            <label htmlFor="name">Enter your email</label><br></br>
            <input onChange={(e)=>{setemail(e.target.value)}} type="email" id='name' placeholder='email Address' />
            </div>
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
              <td>&#8377;15120.00</td>
            </tr>
            
            
          </tbody>
        </table>
        <button className={styles.place_order}>Final Order</button>
    </div>
    </div>
    
</>
  )
}
