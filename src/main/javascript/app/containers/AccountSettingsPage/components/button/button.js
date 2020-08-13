import React,{ Component } from 'react';
import {
  Form
} from 'react-bootstrap';
import { render } from 'react-dom';
import bsCustomFileInput from 'bs-custom-file-input';
export default class UploadButtonComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  componentDidMount() {
    bsCustomFileInput.init()
  }
    render() {
      return (
        <div className="container">
        <div className="custom-file">
          <input id="inputGroupFile01" type="file" className="custom-file-input" />
          <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
        </div>
      </div>
      );
    }
}
