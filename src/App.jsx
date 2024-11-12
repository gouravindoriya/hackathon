import { useState,useEffect } from 'react'

import './App.css'
// import {Header,Footer} from '../src/components/index.js'
import authservice from '../src/appwrite/auth.js'
import {useDispatch} from 'react-redux'
import { Outlet } from 'react-router-dom'
import { login,logout } from './store/authSlice';

function App() {
  // const [loading,setloading]=useState(true);
  // const dispatch=useDispatch()

  // useEffect(()=>{
  // authservice.getcurrentUser()
  // .then((userdata)=>{

  //   if(userdata){
  //   dispatch(login({userdata}));
  //   }
  //   else{
  //   dispatch(logout());
  //   }

  // })
  // .finally(()=>setloading(false));
  // },[])


 

  return (
    <>
    {/* <Header/> */}
      <main className='w-full min-h-lvh'>
      <Outlet/>
      </main>
    <Footer/>
    </>
  )
}

export default App
