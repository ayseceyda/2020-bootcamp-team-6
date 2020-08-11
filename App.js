import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return ( <
      div className = "container" >
      <
      form >
      <
      h1 className = "text-center header" > Login < /h1> <
      div className = "form-group" >
      <
      label > Username < /label> < input className="form-control"/ > < /div>  <
      div className = "form-group" >
      <
      label > Password < /label> < input type="password" className="form-control"/ > < /div> <
      div className = "text-center" >
      <
      button className = "btn btn-success" > Login < /button>

      <
      /div> < /
      form > < /
      div >
    );
  }
}

export default App;