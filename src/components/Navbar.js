import React, { useContext, useState } from 'react'
import styles from '../mycss/navbar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import { createContext } from 'react'
import { databaseWatch } from '../App'
const bar=createContext(null)
export default function Navbar() {
  const navigate=useNavigate()
  
  const handleCartClick=async (e)=>{
    e.preventDefault()
    setProgress(100);
    setTimeout(() => {
      navigate('/checkOut/cart')
    }, 200);
  }
  let tokenFront=localStorage.getItem('token')
  const mydelete=(e)=>{
    e.preventDefault()
    localStorage.removeItem('token')
    window.location.reload()
  }
  const [isopen, setisopen] = useState(false)
  const [dropopen, setdropopen] = useState(true)
  const [result, setresult] = useState(true)
  const handleMouseEnter=()=>{
    if(!isopen){
      setisopen(true)
    }
    else{
      setisopen(false)
    }
  }
  
  
  
  const {progress,setProgress}=useContext(databaseWatch)
  return (
    <>
    

    <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        />
    <header  className={styles.header}>
        <ul className={styles.navUl}>
            <li className="{styles.nav-items}"><img className={styles.navImage}  onMouseEnter={(e) => (e.target.style.color = 'aqua')}
      onMouseLeave={(e) => (e.target.style.color = 'grey')}src="https://storecheq.com/uploads/products/helios.jpg" alt="" /></li>
            <li className={styles.navItems}><Link to='/watches' className={styles.navItemLink} onMouseEnter={(e) => (e.target.style.color = 'aqua')}
      onMouseLeave={(e) => (e.target.style.color = 'grey')}  style={{textDecoration:'none',color:'grey',cursor:'pointer',}}>Watches</Link></li> 
            <li className={styles.navItems}><Link className={styles.navItemLink}  onMouseEnter={(e) => (e.target.style.color = 'aqua')}
      onMouseLeave={(e) => (e.target.style.color = 'grey')} style={{textDecoration:'none',color:'grey',cursor:'pointer',}}>Men</Link></li>
            <li className={styles.navItems}><Link className={styles.navItemLink}  onMouseEnter={(e) => (e.target.style.color = 'aqua')}
      onMouseLeave={(e) => (e.target.style.color = 'grey')} style={{textDecoration:'none',color:'grey',cursor:'pointer',}}>Women</Link></li> 
            <li className={styles.navItems}><Link className={styles.navItemLink} onMouseEnter={(e) => (e.target.style.color = 'aqua')}
      onMouseLeave={(e) => (e.target.style.color = 'grey')}  style={{textDecoration:'none',color:'grey',cursor:'pointer',}}>Smart</Link></li> 
            <li className={styles.navItems}><Link className={styles.navItemLink}  onMouseEnter={(e) => (e.target.style.color = 'aqua')}
      onMouseLeave={(e) => (e.target.style.color = 'grey')} style={{textDecoration:'none',color:'grey',cursor:'pointer',}}>Brands</Link></li> 
            <li className={styles.navItems}><Link className={styles.navItemLink} onMouseEnter={(e) => (e.target.style.color = 'aqua')}
      onMouseLeave={(e) => (e.target.style.color = 'grey')}  style={{textDecoration:'none',color:'grey',cursor:'pointer',}}>Stores</Link></li> 
            <li className={styles.navItems}><Link className={styles.navItemLink}  onMouseEnter={(e) => (e.target.style.color = 'aqua')}
      onMouseLeave={(e) => (e.target.style.color = 'grey')} style={{textDecoration:'none',color:'grey',cursor:'pointer',}}>Offers</Link></li>
        </ul>
        <ul className={styles.navRight}>
            <input type="text" placeholder='Search' />
            
            <div className={styles.navRightuserAcc}>
              <div className={styles.abcd}>

            <i id={styles.userClick} onClick={handleMouseEnter}  className="fa-regular fa-user"></i>
            <i className="fa-regular fa-heart"></i>
            
            <Link>
            <Link onClick={handleCartClick}  style={{color:'black'}}><i  className="fa-solid fa-bag-shopping"></i></Link>
            </Link>
              </div>
          {isopen &&  <div   className={styles.navUser}>
          <strong>Welcome</strong>
          <p>To Access account and manage orders</p>
          {tokenFront===null?<Link to='/Login'><button>Login/SignUp</button></Link>:<Link to='/'><button onClick={mydelete}>LogOut</button></Link>}
         
          <Link  className={styles.linkUser}>Order</Link>
          <Link className={styles.linkUser}>Wishlist</Link>
          <Link className={styles.linkUser}>Contact Us</Link>
      
            </div>}
        </div>
            
        </ul>
        
    </header>
      
    </>
  )
}
export {bar}
