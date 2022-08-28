import React from 'react'
import styled from 'styled-components'
import coorg1 from "../assets/coorg1.jpg";

export default function Services() {
  return (
    <Service>
      <div className="background">
        <img src={coorg1} alt="" />
      </div>
      <div className="title">
       <div className="innert">
       Coorg

       </div>
      </div>

    </Service>
  )
}
 const Service=styled.div`
 position: relative;
margin-top: 2rem;
width: 100%;
height: 100%;
.background{
  height:50%;
  img{
    width:100%;
    height:20vw;
    filter:brightness(78%);
  }
}
.title{
  width: 100%;
  height: 100%;
  position: absolute;
  top:0;
  z-index:3;
  text-align:center;
  display:flex;
  flex-direction:column;
  align-item:center;
  gap:1rem;
  .innert{
    margin-top:3.5rem;
    postion:relative;
    top:12px;
    font-family:Cursive;
    color:white;
    font-size:2rem;
    letter-spacing:0.2rem;
    transition:
  }
  
}
 
 `;