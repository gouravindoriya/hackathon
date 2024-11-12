import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Authlayout = ({children}) => {
   const islogin=useSelector((state)=>state.auth.status)
   const navigate=useNavigate()
  return (
    
     (islogin)?<>{children}</>:<>{navigate("/login")}</>

  )
}

export default Authlayout
