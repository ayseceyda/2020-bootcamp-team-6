import React,{ Component } from 'react';


export default class LivingAreaInfo extends Component {
    render(){
      
        return(
            <form>
     <h1 className = "text-center" > Living Area Info </h1> <div className = "form-group" > <label > Do you own your house or is it rent ? </label> <br/> 
     <input type = "radio"/>Own <input type = "radio"/>Rent <br/> <label> If rent, please describe your landlords pet policy </label> <br/>
      <input type = "textarea"
      placeholder = "Pet policy is..."
      className = "form-control"/>
      <label> Do you have a yard ? </label> <br/>
      <input type = "radio"/>Yes 
      <input type = "radio"/> No <br/>
      <label > Are you living alone or do you have a family ? </label> <br/>
        <input type = "radio"/>Alone <input type = "radio"/>with family <br />
        <label> If you are living with a family, please enter the children count </label><br/>
        <input type = "radio"/>1 <input type = "radio"/>2 <input type = "radio"/>3 <input type = "radio" />3 + < br/>
        <label> Are there any dangerous place at your home ? </label> <br/>
        <input type = "radio"/>Yes <input type = "radio"/>No <br/>
        <br/>
      </div>   
      </form>
        );
    }
}