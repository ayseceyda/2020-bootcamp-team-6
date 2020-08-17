import React, { Componen, Component } from 'react';
import {
    Container, Tab, Sonnet, Tabs, Button
} from 'react-bootstrap';

import PersonalInfo from './personal-info';
import LivingAreInfo from './living-area-info';
import ReferencesInfo from './references-info';
export default class TabComponent extends Component{
    constructor(props, context) {
		super(props, context);
		this.state = {
			key: 1,
        };
        this.handleClick = this.handleClick.bind(this);
    }
   
    handleClick(key) {
      
        this.setState({key});
    }
    render(){
        
        return(
           
            <Container >
               
                <h1 className="text-center"> REGISTER </h1>
            <Tabs 
				id="controlled-tab-example"
				activeKey={this.state.key} onSelect={this.handleClick}
			>
				<Tab eventKey={1} title="Personal Info">
					<PersonalInfo/>
                    <Button type="submit" variant="success" onClick={()=>this.handleClick("2")}>Next</Button>
				</Tab>
				<Tab eventKey={2} title="Living Are Info">
					<LivingAreInfo/>
                    <Button type="submit" variant="success" onClick={()=>this.handleClick("3")}>Next</Button>
				</Tab>
				<Tab eventKey={3} title="References Info" >
					<ReferencesInfo/>
                    <Button type="submit" variant="success" >Submit</Button>
				</Tab>
			</Tabs>
            </Container>
           
        );
    }
}