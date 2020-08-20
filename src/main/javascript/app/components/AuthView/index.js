import React from 'react';
import {
    Nav,
    NavDropdown,
} from 'react-bootstrap';
import LoginPage from '../../containers/LoginPage';

class AuthView extends React.Component {

    //1: Login
    //2: Sign Up
    //3: AccountSettings
    constructor(){
            super();
            this.state = {
                currentView: 1
            }
    }

    changeView(newView){
        this.state({
            currentView : newView
        })
    }



}


export default AuthView;