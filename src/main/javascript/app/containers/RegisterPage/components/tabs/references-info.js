import React,{ Component } from 'react';


export default class ReferencesInfo extends Component {
    render(){
        return(
            <form>
                    <h1 className = "text-center" > References Info </h1> 
                    <div className = "form-group" > <label > Reference Name </label> <br/> 
                    <input type = "text" placeholder = "Reference name" className = "form-control"/> <br/> 
                    <label > Reference Surname </label> <br/> <input type = "text"placeholder = "Reference surname"className = "form-control"/> <br/> 
                    <label> Reference email </label> <br/>
      <input type = "email"
      placeholder = "Reference email"
      className = "form-control"/><br/>
      <label> Reference Phone </label> <br/> <input type = "text" placeholder = "Reference phone" className = "form-control"/> <br/>
      <input type = "checkbox"/>
      <label> Agree Terms and Conditions </label> <br/> <input type = "checkbox"/>
      <label > Receive emails and get notice about news... </label>
     </div >
      </form>
        );
    }
}