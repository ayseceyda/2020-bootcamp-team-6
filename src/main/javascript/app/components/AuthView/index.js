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
                currentView: 2
            }
    }

    changeView(newView){
        this.state({
            currentView : newView
        })
    }


    render(){
        const view = this.state.currentView == 1
                        ?<Nav className="mr-left">
                        <NavDropdown title="Account" id="basic-nav-dropdown" drop="left"><NavDropdown.Item href= "/login">Sign In</NavDropdown.Item> 
                        </NavDropdown>
                        </Nav>
                        : <Nav className="mr-left">
                        <NavDropdown title="Account" id="basic-nav-dropdown" drop="left"><NavDropdown.Item href="/account-settings" 
                        >Account Settings</NavDropdown.Item></NavDropdown>
                        </Nav>
        return view
    }

}


export default AuthView;