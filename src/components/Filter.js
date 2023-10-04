import React from 'react'
import styles from '../mycss/filter.module.css'
import { useContext } from 'react'
import  {databaseWatch} from '../App'
import { useState } from 'react'

export default function Filter() {
  const {watchData,setWatchData,json,brandFilter,genderFilter}=useContext(databaseWatch)
   const [thanda, setthanda] = useState("")
   
   

   console.log("Value of brandFilter is",brandFilter);
  const handleFilter=(e,filtertype)=>{
    e.preventDefault()
    console.log("The json is:",json);
    const val=e.target.value;
    console.log(val);
    json.forEach(element => {
      console.log(element.tag1);
      if(element.title===val){
        console.log("Found");
        brandFilter.push(element)
      }
      
    });
    json.forEach(element => { 
      if(element.tag1===val){
        console.log("Found");
        genderFilter.push(element)
      } 
    });
    setWatchData([...new Set(brandFilter.concat(genderFilter))])
  }
  return (
    <>
    <div className={styles.filter}>

   <h4 >Filter Items</h4>
   <details  className={styles.mynaman}><summary className={styles.myfilter}><i class="fa-solid fa-caret-down"></i>{"\n"}Top Companies</summary>
   <input type="checkbox" onClick={(e)=>{handleFilter(e,"title")}} value={"Beige"} />Beige
   <br></br>
   <input type="checkbox" onClick={(e)=>{handleFilter(e,"title")}}   value={"Calvien Klien"} />Calvin Klien
   <br></br>
   <input type="checkbox" onClick={(e)=>{handleFilter(e,"title")}} value={"Titan"} />Titan
   <br></br>
   <input type="checkbox" onClick={(e)=>{handleFilter(e,"title")}} value={"Tommy Hilgifer"} />Tommy Hilgifer
   <br></br>
   <input type="checkbox" onClick={(e)=>{handleFilter(e,"title")}} value={"Hugo Boss"} />Hugo Boss
   </details>
   <details><summary className={styles.myfilter}>Gender</summary>
   <input type="checkbox" onClick={(e)=>{handleFilter(e,"tag1")}} value={"Men"} />Male
   <br></br>
   <input type="checkbox" onClick={(e)=>{handleFilter(e,"tag1")}} value={"Women"} />Female
   </details>
   <details><summary className={styles.myfilter}>Price</summary>
   <input type="checkbox" value={1000} />Over 1000
   <br></br>
   <input type="checkbox" value={15000} />Over 15000
   <br></br>
   <input type="checkbox" value={20000} />Over 20000
   <br></br>
   <input type="checkbox" value={50000} />Over 50000
   <br></br>
   <input type="checkbox" value={100000} />Less 1lakh
   </details>
   
    </div>
    </>
  )
}
