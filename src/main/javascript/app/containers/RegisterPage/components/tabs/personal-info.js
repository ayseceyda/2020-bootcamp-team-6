import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../../../../services/UserService';

export default class PersonalInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            address: '',
            date: '',
            rent: '',
            petPolicy: '',
            yardInfo: '',
            familyInfo: '',
            childrenCount: 0,
            dangerInfo: ''
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }



    saveUser = (e) => {
        e.preventDefault();
        let user = { name: this.state.firstName, surname: this.state.lastName, address: this.state.address, birthday: this.state.date,
        rentInfo: this.state.rentInfo, petPolisy: this.state.petPolicy, yardInfo: this.state.yardInfo, familyInfo: this.state.familyInfo,
        childrenCount: parseInt(this.state.childrenCount), isDanger: this.state.dangerInfo };
        console.log('user =>' + JSON.stringify(user));

        UserService.createUser(user).then(res=>{
            console.log('success!');
        })
    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }

    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }

    changeAddressHandler = (event) => {
        this.setState({ address: event.target.value });
    }

    changeDateHandler = (event) => {
        this.setState({ date: event.target.value });
    }

    changeRentHandler = (event) => {
        this.setState({ rent: event.target.value });
    }

    changePetPolicyHandler = (event) => {
        this.setState({ petPolicy: event.target.value });
    }

    changeYardInfoHandler=(event)=>{
        this.setState({yardInfo: event.target.value});
    }

    changeFamilyInfoHandler=(event)=>{
        this.setState({familyInfo: event.target.value});
    }

    changeChildrenCountHandler=(event)=>{
        this.setState({childrenCount: event.target.value});
    }

    changeDangerInfoHandler=(event)=>{
        this.setState({dangerInfo: event.target.value});
    }

    render() {
        return (
            
            <form>
                <img width="90%" src="https://i.hizliresim.com/bnpP1o.jpg"/>
                <h1 className="text-center" > Personal Info </h1>
                <div className="form-group" > <label > Name </label> <br /> <input type="text" name="firstName" placeholder="First Name" className="form-control" value={this.state.firstName} onChange={this.changeFirstNameHandler} /> <br />
                    <label > Surname </label> <br /> <input type="text" placeholder="Last Name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.changeLastNameHandler} /> <br />
                    <label > Address </label> <br />
                    <input type="textarea"
                        placeholder="your address"
                        className="form-control"
                        name="address" value={this.state.address} onChange={this.changeAddressHandler} /> <br />
                    <label > Date </label> <br />
                    <input type="Date()"
                        placeholder="your birth date"
                        className="form-control"
                        name="date" value={this.state.date} onChange={this.changeDateHandler} />
                    <br />
                </div >



                <h1 className="text-center" > Living Area Info </h1> <div className="form-group" > <label > Do you own your house or is it rent ? </label> <br />
                    <input type="textarea" className="form-control" value={this.state.rent} onChange={this.changeRentHandler} placeholder="Own/Rent..." /><br /> <label> If rent, please describe your landlords pet policy </label> <br />
                    <input type="textarea"
                        placeholder="Pet policy is..."
                        className="form-control"
                        value={this.state.petPolicy} onChange={this.changePetPolicyHandler} />
                    <label> Do you have a yard ? </label> <br />
                    <input type="textarea" className="form-control" placeholder="I have..." 
                    value={this.state.yardInfo} onChange={this.changeYardInfoHandler}/>  <br />
                    <label > Are you living alone or do you have a family ? </label> <br />
                    <input type="textarea" className="form-control" placeholder="I am living with..." 
                    value={this.state.familyInfo} onChange={this.changeFamilyInfoHandler}/> <br />
                    <label> If you are living with a family, please enter the children count </label><br />
                    <input type="textarea"
                        placeholder="How many children do you have?"
                        className="form-control"
                        value={this.state.childrenCount}
                        onChange={this.changeChildrenCountHandler} /> < br />
                    <label> Are there any dangerous place at your home ? </label> <br />
                    <input type="textarea" className="form-control" placeholder="Yes/No..." 
                    value={this.state.dangerInfo} onChange={this.changeDangerInfoHandler}/> <br />
                    <br />
                </div>

                <button className="btn btn-success" onClick={this.saveUser}>Submit</button>
                <Link to='/login' className="btn btn-danger" style={{ marginLeft: "10px" }}>Cancel</Link>

                <br />
                <br/>
            </form>
        );
    }
}
