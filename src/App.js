import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Watches from './components/Watches';
import Watch from './components/Watch';
import Cart from './components/Cart';
import Login from './components/Login';
import LoadingBar from 'react-top-loading-bar'
import Order from './components/Order';

const databaseWatch = createContext(null);
const specificArr=[]
const brandFilter=[]
const genderFilter=[]
export default function App() {
  
  const [progress, setProgress] = useState(0)
  const [watchData, setWatchData] = useState([]);
  const [total, settotal] = useState(0)
  const [json, setjson] = useState()
  const [url, seturl] = useState('/')

  useEffect(() => {
    const fetchWatchData = async () => {
      console.log('fetcthwatchData is Running');
      const host = "http://localhost";
      console.log("myfetcher Function running");
      const response = await fetch(`${host}/watches`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const json = await response.json();
      console.log(json);
      await setWatchData(json);
      await setjson(json)
    };

    fetchWatchData();
  },[]);


  return (
    <databaseWatch.Provider value={{watchData,url,seturl,specificArr,setWatchData,json,brandFilter,genderFilter,progress,setProgress,total,settotal}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/watches' element={<Watches />} />
          <Route path='/watches/:url/:arg1/:arg2/:arg3' element={<Watch/>} />
          <Route path='/checkOut/Cart' element={<Cart />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/order/:_id' element={<Order />} />

        </Routes>
      </BrowserRouter>
    </databaseWatch.Provider>
  );
}

export { databaseWatch };
