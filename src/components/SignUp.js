import React from 'react';
import IconsSignIn from './servise/IconsSignIn';
import MainSign from './MainSign';
import Button from './Button';
import InfoEnd from './InfoEnd';
import styled from 'styled-components';

import LinkBack from './LinkBack';
import "./animations.css"
const SignUp = () => {
   return (
      <SSignUp>
         <h2 className='h2'>Sign up</h2>
         <IconsSignIn />
         <MainSign children={"First Name*"} name={'firstName' } />
         <MainSign children={"Last Name*"} name={'lastName'} /> 
         <MainSign children={"Email Address*"} name={"email"}  />
         <MainSign children={"Password*"} type='password' name={"password"} />
         <input type="checkbox" name="c1" id="c1" />
         <label htmlFor="c1"> I want to receive inspiration, marketing<br></br>
            promotions and updates via Email</label>
         <Button children={'SIGN UP'} />
         {/* <span >Already have an account? Sign In</span> */}
         <LinkBack/>
         <InfoEnd children={' Copyrigth ⓒ Your Website 2022.'} />
         </SSignUp>
   );
};
const SSignUp = styled.form`
font-family: 'Roboto', sans-serif;
color:white;
background: #5c5050;
width: 464px;
height: auto;
border-radius: 20px;
font-size: 18px`
export default SignUp