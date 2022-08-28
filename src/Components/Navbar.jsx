import React from 'react'
import styled from 'styled-components'
import logo1 from "../assets/logo1.jpg";
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <> 
    <Nav>
        <div className="brand">
            <div className="container">
                <img src={logo1} width="50" height="50" alt="" />
                Trippynomads
            </div>
            <div className="toggle"></div>
        </div>
<ul>
    <li><Link to="/" class="ab">Home</Link></li>
    <li><Link to="#services" class="ab">About</Link></li>
    <li><Link to="#rec" class="ab">Upcomming Trips</Link></li>
</ul>
<div className="handles">
<a href="https://www.instagram.com/trippynomadss/?hl=en">
<ion-icon name="logo-instagram">
</ion-icon>
</a>
</div>
    </Nav>
    </>
  )
}
const Nav=styled.nav`
display:flex;
justify-content:space-between;
align-items:center;
.brand{
.container{
cursor:pointer;
display:flex;
align-items:center;
gap:0.5rem;
font-size:1.2rem;
font-weight:900;
text-transform:uppercase;
}
.toggle{
  display:none;
}
}
ul{

  display:flex;
  list-style-type:none;
  gap:1rem;
  li{
    .ab{
    text-decoration:none;
    color:red;
    font-size:1.2rem;
    transition: 0.15s ease-in-out;
    &:hover{
      color:green;
    }
  }
  &:first-of-type{
    .ab{
    color:green;
    font-weight:900;
  }
}
  
}
}
.handles{
  align-items:center;
  top:1000;
  width:10px;
  height;50px;
}

`;