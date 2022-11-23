import React, { useState } from 'react';
import styled from 'styled-components';
const Button = ({ children,on }) => {
    const [clickk,setClickk]=useState(on)
    return (<div><Sbutton ona={clickk} onClick={() => { setClickk(!clickk) }}>{children}</Sbutton ></div>
       
   );
}; 
const Sbutton = styled.button`
     background:${(props) => {
    return props.ona ?'#8f8888':'#5d9d8cf0'
    }
   } ;
    font-family: 'Roboto', sans-serif;
    margin-top: 29px;
    height: 43px;
    width: 223px;
    border: 2px solid white;
    font-family: fangsong;
    align-self: center;
    border-radius: 20px;`
export default Button;
