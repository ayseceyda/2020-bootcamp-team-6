/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';


import H1 from 'components/H1';
import messages from './messages';
import NavbarComponent from '../../components/navbar/navbar.js';
import Footer from '../../components/Footer/Footer.jsx';
export default function NotFound() {
  return (
  
      <div>
        <NavbarComponent/>
     <h1 className="text-center">PAGE NOT FOUND :(</h1>
      <Footer/>
     </div>
     
   
 
  );
}
