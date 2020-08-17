import React,{ Component } from 'react';

export default class PersonalInfo extends Component {
    render(){
        return(
            <form>
      <h1 className = "text-center" > Personal Info </h1>
       <div className = "form-group" > <label > Name </label> <br/> <input type = "text" placeholder = "your name"className = "form-control" / > <br/>
        <label > Surname </label> <br/> <input type = "text" placeholder = "your name" className = "form-control"/> <br/> 
        <label > Address </label> <br/>
        <input type = "textarea"
      placeholder = "your address"
      className = "form-control"/> <br/>
      <label > Date </label> <br/>
       <input type = "Date()"
      placeholder = "your birth date"
      className = "form-control" / >
      <br/>
       </div >
     
      </form>
        );
    }
}
