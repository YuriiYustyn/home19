import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CreateAccount = () => {
   return (
      <SCreateAccount>
         <Link  to="/SignUp">Dont have an account?<br></br> Sing up</Link>
      </SCreateAccount>
   );
};
const SCreateAccount = styled.nav`
color: #c9a6a6;
font-size: 14px;
`
export default CreateAccount;