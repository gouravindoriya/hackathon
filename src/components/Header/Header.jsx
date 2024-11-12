import React from 'react'
import { CiMenuFries } from "react-icons/ci";
import { useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from 'react-router-dom';
const Header = () => {
  const isuser=useSelector((state)=>state.auth.status);
  
   
  return (
    <div className=' text-blue-950 py-4 px-8   flex justify-between bg-slate-200'>
       
       <Link to="/"><h1 className='font-mono font-bold text-2xl'>Shopnow</h1></Link>
       <nav >
       { (isuser)?
        (
          
          <div className='grid gap-4 grid-cols-2'>
            <Link to="/profile"><Person2OutlinedIcon/></Link>
             <Link to="/cart"> <Badge badgeContent={4} color="primary">
             < ShoppingCartOutlinedIcon/>
             </Badge>
         </Link>
        
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
