
import { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import React from 'react';
import axios from 'axios';
import { Redirect,Link } from 'react-router-dom';
import { log } from 'util';


export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            tokenInLogin:""
        }
        this.emailValue = this.emailValue.bind(this);
        this.passwordValue = this.passwordValue.bind(this);
        this.submitForm = this.submitForm.bind(this);


    }

    componentWillMount() {

    }

    emailValue(event) {
        event.preventDefault()
        this.setState({ email: event.target.value });
       // console.log(event.target.value,"email....")
    }
    passwordValue(event) {
        event.preventDefault()
        this.setState({ password: event.target.value });
        console.log(event.target.value, "p-wd....")
    }
    submitForm(event) {
        event.preventDefault();
        console.log(this.state, "Submit...")

        if (this.state.email && this.state.password) {

            let user = {
                email: this.state.email,
                password: this.state.password
            }
            var headers = {
                'Content-Type': 'application/json'
            }

            axios.post('http://192.168.1.8:8080/api/login', JSON.stringify(user), { headers: headers })
                .then(res => {
                    sessionStorage.setItem("token", res.data.token);
                    console.log(res.data.token, "res.......")
                }).then(() => {
                    this.setState({
                        tokenInLogin: sessionStorage.getItem("token")
                    })
                }

                )

        } else {
            alert("please enter email /password")
        }
    }

    render() {
        console.log(this.state.tokenInLogin, "sessionStorage.getItem....")
        if (this.state.tokenInLogin) {
            console.log("entered into redirect block....")
            return <Redirect to='/home' />
        }


        return (

            <div>
                <div style={{"margin-top":"5em"}}></div>
            <Form style={{ "width": "25%", "margin-left": "40%" }} onSubmit={this.submitForm}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={this.emailValue} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={this.passwordValue} />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
  </Button>
                </Form>
                <span className='signup-button'>  <p>No Account ?</p>&nbsp;<Link to='/signup'><Button style={{background:"black"}}>Sign Up</Button></Link> </span>
                </div>

            )

    }


}
