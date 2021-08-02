import React from 'react'
import { IoMdSearch } from "react-icons/io";

export default function Searchbar() {
    return (
        
          

<div class="search-bar">
  
  <input type="text" class="input" placeholder="&nbsp;"/>
  <span class="label"><p>Location<br/>where you are goin?</p></span>
  <span class="highlight"></span>
  |
  <input type="text" class="input2" placeholder=""/>
  <span class="label2">Check in <br/>Add date</span>
  <span class="highlight2"></span>
  |
  <input type="text"class="input3" placeholder="&nbsp;"/>
  <span class="label3">Check in <br/>Add date</span>
  <span class="highlight3"></span>
  |
  <input type="text"class="input4" placeholder="&nbsp;"/>
  <span class="label4">Guests<br/>add guest</span>
  <span class="highlight3"></span>
  <button class="search-btn">
      <IoMdSearch size={40}/>
      
       
    </button>
  </div>

            
        
    )
}
