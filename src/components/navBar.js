import React from 'react'

import {useState} from 'react'

import './Navbar.css'



import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default function Navbar() {
 const [click,setclick] = useState(false)
 const [button,setbutton] = useState(false)



 const handleClick=()=>{
     setclick(!click)
 }
 const closeMobileMenu=()=>{
     setclick(false)
 }
 const showButton=()=>{
     if(window.innerWidth<=960){
         setbutton(false)
     }else{
         setbutton(true)
     }
 }
 window.addEventListener('resize',showButton)
    return (
        <>
        
       <div className="navbar">
           
           <div className="navbar-container container" >
              
           <Link to="/" className="navbar-head" >
            
            Get the latest on our COVID-19 Response
        </Link>

           </div>


       </div>
            
        </>
    )
}
