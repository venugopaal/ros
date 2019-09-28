import { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import React from 'react';
import { Redirect,Link } from 'react-router-dom'


export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {}
      }

render(){

return(
<div>
<Link to='/login'>back</Link>
  <h2>signup</h2>

  </div>
)

}


    }
