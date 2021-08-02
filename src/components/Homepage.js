import React from 'react'
import '../App.css';
import Searchbar from '../searchbar';
import Comp2 from './comp2';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Comp3 from './comp3';

export default function Homepage() {
    return (
        <div>
     
   <Comp2/>
   <div><Link><p className="link">Places to stay</p></Link></div>
   <Searchbar/>
   <Comp3/>
   
        </div>
    )
}
