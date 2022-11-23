import React from 'react';
import { locked } from "../servise/locked.png"
import styled from 'styled-components';
const IconsSignIn = () => {
   return (
      <div>
         <Icon src={"https://cdn-icons-png.flaticon.com/512/565/565547.png"}  alt='Hello'/>
      </div>
   );
};
const Icon = styled.img`
height:100px;
width:100px; 
border: 2px solid black;
border-radius: 38%;
color: red`
export default IconsSignIn;