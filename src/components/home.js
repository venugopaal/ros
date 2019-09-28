
import { Component } from 'react';
import React from 'react';
import { Redirect,Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap';
import data from "../staticData";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logout:false
        };
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault();
        this.setState({
            logout:true
        })
        console.log(this.state.logout,"logout state")
        sessionStorage.removeItem("token");
    }


    render() {

        if (this.state.logout) {
            console.log(this.state.logout,"logout state in render...")
            return <Redirect to='/login' />
        }

        return (
        <div>

                {sessionStorage.getItem("token")  ?
                    <div>
                        <h3>This is Home page</h3>
                        <button class='logout-button' onClick={this.logout}>Logout</button>

                        <Link to="/addProduct"> <Button className='add-product'>Add Product</Button> </Link>

                        <div className='container'>

                            <div class='row'>

                            {data.map((item, index) => {
                                return (

                                        <div className='col-md-3 '>

                                            <Card className="card-block" style={{ width: '18rem' }}>
                                                <Card.Body>
                                                    <Card.Title>{item.title}</Card.Title>
                                                </Card.Body>
                                            <Card.Img variant="bottom" src={item.image} />
                                                <Card.Footer className="text-muted">
                                                    <Button variant="primary" style={{ position: 'absolute', right: '5%', bottom: '5%' }}>Buy</Button>
                                               <b>Rs: </b> <strike> {item.actual_price}</strike>&nbsp;&nbsp;<b>{item.discount_price}</b> /-
                                            </Card.Footer>
                                            </Card>

                                        </div>

                                )
                            })}


                            </div>

                            </div>
                    </div> :""}
                </div>
                )
    }

}
