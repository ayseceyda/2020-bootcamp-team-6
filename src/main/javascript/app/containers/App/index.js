

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';


 // Page imports
 import HomePage from '../HomePage/index.js';
 import LoginPage from '../LoginPage/index.js';
 import RegisterPage from '../RegisterPage/index.js';
 import ContactPage from '../ContactPage/index.js';
 import AccountSettingsPage from '../AccountSettingsPage/index.js';
 import AppointmentPage from '../AppointmentPage/index.js';
 import NotFoundPage from '../NotFoundPage/index';

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
        <Route exact path="/register" component={RegisterPage}/>
        <Route exact path="/contact" component={ContactPage}/>
        <Route exact path="/appointment" component={AppointmentPage}/>
        <Route exact path="/account-settings" component={AccountSettingsPage}/>
        <Route exact path="/*" component={NotFoundPage}/>
      </Switch>
    
  
  );
}
