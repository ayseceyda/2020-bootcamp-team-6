

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';


 // Page imports
 import HomePage from '../HomePage/index.js';
 import LoginPage from '../LoginPage/index.js';
import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    
      

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage}/>
      </Switch>
    
  
  );
}
