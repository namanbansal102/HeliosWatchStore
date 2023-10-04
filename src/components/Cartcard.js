import React, { useContext, useEffect } from 'react'
import styles from '../mycss/cartCard.module.css'
import { databaseWatch } from '../App'
import { myCartWatch } from './Cart'
export default function Cartcard(props) {
  const {mylocal,setmylocal}=useContext(myCartWatch)
  let {specificArr}=useContext(databaseWatch)
  console.log(specificArr);
  let {imageUrl,title,price,tag1,tag2,tag3,element}=props
  useEffect(() => {
    
  }, [mylocal])
  

  const handleRemove=(e)=>{
    e.preventDefault();
    console.log("Handle Removing is Running");
    console.log(mylocal);
    console.log("The Value Of Element is",element);
    let newArray=mylocal.filter((item)=>item.findResult[0]._id!==element.findResult[0]._id)
   
    console.log("Value of newArrays is ",newArray);
    console.log(newArray.length);
    localStorage.setItem('cart',JSON.stringify(newArray))
    setmylocal(newArray)
    window.location.reload()
  }
  return (
    <>
    <div className={styles.my_card}>
        <div className={styles.image_heading}>

        <img src={imageUrl} alt="" />
        <div className={styles.headings}>
            <h5>{title}-{tag1}-{tag2}-{tag3}</h5>
            <h5>Title:Trending</h5>
            <h3>&#8377;{price}</h3>
        </div>
        </div>
        <button onClick={handleRemove}>Remove</button>
    </div>
    </>
  )
}
