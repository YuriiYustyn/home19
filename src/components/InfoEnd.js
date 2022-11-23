import React from 'react';
import styled from 'styled-components';

const InfoEnd = ({ children }) => {
   return (
      <div>
         <SInfoEnd>
           {children}
         </SInfoEnd>
      </div>
   );
};
const SInfoEnd = styled.h4`
color: gray;
font-size: 10px
`
export default InfoEnd;