import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';


import MainSign from './MainSign';
import IconsSignIn from "./servise/IconsSignIn"
import Button from './Button';
import InfoEnd from './InfoEnd';
import CreateAccount from './CreateAccount';

import "./animations.css"

const SignIn = () => {
   const [email, setEmail] = useState('')
   


   return (
      <SSignIn >
         <h2 className='h2'>Sign In</h2>
         <IconsSignIn /> 
         <MainSign value={email} name={"email"} children={"Email Address*"}    />
         <MainSign  name={"password"} type='password' children={"Password*"} />
         <input type="checkbox" name="c1" id="c1" />
         <label htmlFor="c1"> Remember me</label>
         <Button  children={'SIGN IN'} type="button" />
         <CreateAccount place={'in'} />
         <InfoEnd children={' Copyrigth ⓒ Your Website 2022.'} />
      </SSignIn>

   );
};
const SSignIn = styled.form`

color: white;
background: #5c5050;
width: 464px;
height: 600px;
border-radius: 20px;
`;
export default SignIn;