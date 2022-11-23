import React from 'react';
import { Link } from 'react-router-dom';

const LinkBack = () => {
   return (
      <div>
         <nav >
            <Link to="/">Already have an account? Sign in</Link>
         </nav>
      </div>
   );
};

export default LinkBack;