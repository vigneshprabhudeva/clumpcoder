import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { AiOutlineMenu,IoGlobeOutline } from "react-icons/ai";
  import { CgGlobeAlt } from "react-icons/cg";
  import Avatar from '@material-ui/core/Avatar';
  import './comp2.css'
  import logo from './globe.svg'

export default function Comp2() {
    return (
        <div className="container">
<div className="comp2">
           <div className="globpara"><a href="google.com" className="link"><p><b>Switch to hosting</b><img src={logo}></img></p>
               </a> </div> 
            
            <div className="innerComp"><AiOutlineMenu onClick={()=>{alert("test menu button")}}  className="menu" size={20}/>  <Avatar className="avatar" onClick={()=>{alert("test profile")}} style={{ height: '30px', width: '30px' }}/> </div>
        </div>

        </div>
        
    )
}
