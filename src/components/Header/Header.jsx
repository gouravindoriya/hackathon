import React from 'react'
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from 'react-router-dom';

const Header = () => {
  const isuser=useSelector((state)=>state.auth.status);
  
   
  return (
    <div className=' text-blue-950 py-4 px-8   flex justify-between bg-slate-200'>
       
       <Link to="/"><h1 className='font-mono font-bold text-2xl'>ITM Alumini</h1></Link>
       <nav >
       { (isuser)?
        (
          
          <div className=''> 
            You are logged in
          </div>
         
        ):
          <ButtonGroup variant="outlined" aria-label="Basic button group">
            <Link to={"/login"}><Button>Login</Button></Link>
            <Link to={"/signup"}><Button>Signup</Button></Link>
         </ButtonGroup>
         }
       </nav>
      

    </div>
  )
}

export default Header
