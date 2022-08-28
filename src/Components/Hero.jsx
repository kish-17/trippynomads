import React from 'react'
import styled from 'styled-components'
import hero from "../assets/hero.jpg";
import {Link} from 'react-router-dom'
export default function Hero() {
  return (
    <>
    <Section id='hero'>
      <div className="background">
        <img src={hero} alt="" />
      </div>
    <div className="content">
      <div className="title">
        <h1>Next trip</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum unde ut reprehenderit ratione earum laborum eligendi, aut numquam totam. Quasi neque soluta inventore vel, libero nihil tempora. Suscipit, quaerat voluptas!</p> 
      </div>
   
    <div className="search">
    <Link to="/Services" class="btn btn-primary">  Explore now</Link>
    </div>
    </div>
      </Section>  
    </>
  )
}

const Section=styled.section`
position: relative;
margin-top: 2rem;
width: 100%;
height: 100%;
.background{
  height:50%;
  img{
    width:100%;
    height:20vw;
    filter:brightness(50%);
  }
}
.content{
  width: 100%;
  height: 100%;
  position: absolute;
  top:0;
  z-index:3;
  text-align:center;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-item:center;
  gap:1rem;
.title{
  color:white;
  h1{
    font-size:3rem;
    letter-spacing:0.2rem;
  }
  p{
    text-align:center;
    padding:0.3vw;
  }
}
.search{
  a{
    text-decoration:none;

  }
}
}
`;