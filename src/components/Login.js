import React, { useState } from 'react'
import styles from '../mycss/login.module.css'
import { useNavigate } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'


export default function Login() {
  const myclickEvent=(first,last)=>{
    if(first.value.length){
      document.querySelector(`#${last}`).focus()
    }

  }
  const navigate=useNavigate();
  const [myval, setmyval] = useState("")
  const [first, setfirst] = useState("")
  const [second, setsecond] = useState("")
  const [third, setthird] = useState("")
  const [four, setfour] = useState("")
  const [myotp, setmyotp] = useState("")
  const [error, seterror] = useState("Do not Include Country Code +91 or 0");
  const [next, setnext] = useState(null)
  const getErrorStyle = () => {
    return error === "Please Enter a Valid Phone Number" ? { color: 'red' } : { color: 'black' };
  };
  const verifyOtp=async ()=>{
    try {
      console.log('Verify otp is Running');
      const host = "http://localhost";
      const response = await fetch(`${host}/login/verfiy`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({otp:myotp})
      });
      const json = await response.json();
      console.log(json);
      const {jwtData,login}=json
      if(login===true){
        seterror("Login Successfully")
        navigate("/")
        localStorage.setItem('token',jwtData)
      }
      else{
        seterror("Invalid Otp Please Enter a Valid Otp")

      }
    }catch (error) {
        console.log(error);
      } 
      

  }

  const sendOtp = async () => {
    try {
      
    
    console.log('Send otp is Running');
    const host = "http://localhost";
    console.log("Send otp Function running");
    const response = await fetch(`${host}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({phoneNumber:myval})
    });
    const json = await response.json();
    console.log(json);
    const {otpSuccess}=json;
    if(otpSuccess){
      seterror("Otp Sent Successfully")
      setnext(1)
      

    }
    else{
      seterror("Error Sending Otp")
    }
    
    
  }catch (error) {
      console.log(error);
    } 
    
  };
  const handleOtp=(e)=>{
    console.log(myval);
    e.preventDefault()
    if(myval.length!==10){
      seterror("Please Enter a Valid Phone Number")
      setTimeout(() => {
        seterror("Do not Include Country Code +91 or 0")
        
      }, 2000);
      
     
    }
    else{
     sendOtp()
    }

  }
  const handleVerify=(e)=>{
    e.preventDefault();
    const yourOtp=first.toString()+second.toString()+third.toString()+four.toString();
    console.log("Your otp is",yourOtp);
    setmyotp(parseInt(yourOtp));
    verifyOtp();
    

  }
  return (
    <div className={styles.bodyContainer}>

    <div className={styles.loginContainer}>  
        
        <h3>Login/Sign up</h3>

      {next===null?<>
      <input onChange={(e)=>{setmyval(e.target.value)}} type="number" className={styles.oneo} placeholder='Enter Your Mobile Number' />
        <p style={getErrorStyle()}>{error}</p>
        <button onClick={handleOtp}>Generate OTP</button>
        <span style={{fontSize:'15px',marginTop:'5px',textDecoration:'underline'}}>Trouble Signing in</span></>:<>
        <div className={styles.mayus}>
          
        <input maxLength={1} id='a' onChange={(e)=>{setfirst(e.target.value)}} type="numberr" className={styles.otpInput} />

        <input id='b' maxLength={1}  onChange={(e)=>{setsecond(e.target.value)}} type="numberr" className={styles.otpInput} />
        <input id='c'  maxLength={1} onChange={(e)=>{setthird(e.target.value)}} type="numbrrr" className={styles.otpInput} />
        <input id='d' maxLength={1} onChange={(e)=>{setfour(e.target.value)}} type="numberr" className={styles.otpInput} />
        </div>
        <button onClick={handleVerify}>Verify</button>
        <span style={{fontSize:'15px',marginTop:'5px',textDecoration:'underline'}}>{error}</span>
        </>}
      

    </div>
    </div>
  )
}
