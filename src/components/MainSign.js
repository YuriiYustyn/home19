import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const MainSign = ({ children, type, name,transparent,...props }) => {
   const [value, setValue] = useState('')
   const [borderColor, setBorderColor] = useState(false)
   const [transparentColor, settransparentColor] = useState(false)
   const [errorText, setErrorText] = useState('')
   const compare = () => {
      if ((name === "firstName" || name === "lastName") && value.length <=2) {
         setErrorText('Мінімум 3 літери')
         settransparentColor(true)
         setBorderColor(true)
      }
      else if ((name === "firstName" || name === "lastName") && value.length >= 2) {
         setErrorText('rfj')
         settransparentColor(false)
         setBorderColor(false)
      }
      else if (name === "email" && value.length <= 3) {
         setBorderColor(true)
         setErrorText('Мінімум 3 символи')
         settransparentColor(true)
      } else if (name === "email" && value.length > 3) {
         if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            setBorderColor(true)
            settransparentColor(true)
            setErrorText("Невірний емейл")
            console.log(3)
         } else {
            settransparentColor(false)
            setBorderColor(false)
            console.log(3)

         }
      } else if (name === 'password' && value.length < 8) {
         setBorderColor(true)
         setErrorText('Мінімум 8 літер (маленькі + великі літери)')
         settransparentColor(true)
      } else if (name === 'password' && value.length >= 8) {
         if (/(?=.*[a-z])(?=.*[A-Z])/g.test(value)) {
            setBorderColor(false)
            settransparentColor(false)
         } else {
            
            setBorderColor(false)
         }
      }
   }


   return (
      <div>
         <SMainSign
            value={value} border={borderColor} type={type} placeholder={`${children}`}
            onChange={(e) => setValue(e.target.value)} onBlur={() => compare()}
         />
         <Sp transparent={transparentColor}>{ errorText}</Sp>
      </div>
   );
};

const SMainSign = styled.input`
font-family: 'Roboto', sans-serif;
color:'black' ;
margin-top: 20px;
background: thistle;
border-radius: 6%;
border: 3px solid ;
border-color:${(props) => {
   return props.border ? 'red' : '#5d9d8cf0'
   }
   } ;
`
const Sp = styled.div`
color:${(props) => {
   return props.transparent ? 'red' : '#fffcfc00'
   }
   } ;
   font-size:11px
`
export default MainSign;