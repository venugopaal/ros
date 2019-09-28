import { Component } from 'react';
import React from 'react';
import { Redirect, Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: "",
            compName: "",
            image: "",
            descrip:"",
            price:"",
            discprice:"",
            errors: {
                productName:"",
            },
        }
        this.productNameChange = this.productNameChange.bind(this);
        this.textValidator = this.textValidator.bind(this);
        this.compNameChange = this.compNameChange.bind(this);
        this.imageChange = this.imageChange.bind(this);
        this.descripChange = this.descripChange.bind(this);
        this.priceChange = this.priceChange.bind(this);
        this.discpriceChange = this.discpriceChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    productNameChange(e) {
        console.log(e.target.value, "======");
        this.setState({
            productName: e.target.value
        })
    }
    compNameChange(e) {
        this.setState({
            compName: e.target.value
        })
    }
    imageChange(e) {
        console.log(e.target.value,"image.....")
        this.setState({
            image: e.target.value
        })
    }
    descripChange(e) {
        this.setState({
            descrip: e.target.value
        })
    }
    priceChange(e) {
        this.setState({
            price: e.target.value
        })
    }
    discpriceChange(e) {
        this.setState({
            discprice: e.target.value
        })
    }

    submitHandler(e){
      e.preventDefault();
if(this.state.productName=="" || this.state.compName=="" || this.state.image=="" || this.state.descrip=="" || this.state.price=="" || this.state.discprice==""){
alert("Please Fill All Inputs...")
}else{
  console.log(this.state,"Submitted.....")
}

    }




    textValidator(event) {
          let fname = event.target.name;
        let value = event.target.value;
        if (fname == 'productName') {
            if (value == "") {

                this.setState({
                    errors: {
                        ...this.state.errors,
                        productName: "please enter product Name"
                    }
                })
            } else {
                this.setState({
                    errors: {
                        ...this.state.errors,
                        productName: ""
                    }
                })
            }
        }
        if (fname == 'compName') {
            if (value == "") {

                this.setState({
                    errors: {
                        ...this.state.errors,
                        compName: "please enter Company Name"
                    }
                })
            } else {
                this.setState({
                    errors: {
                        ...this.state.errors,
                        compName: ""
                    }
                })
            }
        }
        if (fname == 'lll') {
            if (value == "") {

                this.setState({
                    errors: {
                        ...this.state.errors,
                        image: "please choose Image"
                    }
                })
            } else {
                this.setState({
                    errors: {
                        ...this.state.errors,
                        image: ""
                    }
                })
            }
        } if (fname == 'descrip') {
            if (value == "") {

                this.setState({
                    errors: {
                        ...this.state.errors,
                        descrip: "please enter description"
                    }
                })
            } else {
                this.setState({
                    errors: {
                        ...this.state.errors,
                        descrip: ""
                    }
                })
            }
        }
        if (fname == 'price') {
            if (value == "") {

                this.setState({
                    errors: {
                        ...this.state.errors,
                        price: "please enter price"
                    }
                })
            } else {
                this.setState({
                    errors: {
                        ...this.state.errors,
                        price: ""
                    }
                })
            }
        }
        if (fname == 'discprice') {
            if (value == "") {

                this.setState({
                    errors: {
                        ...this.state.errors,
                        discprice: "please enter discprice"
                    }
                })
            } else {
                this.setState({
                    errors: {
                        ...this.state.errors,
                        discprice: ""
                    }
                })
            }
        }

        }



    render() {
        return (
            <div>

            <Link to='/home'>Back</Link>
                <h3>add Product Page</h3>

                <div className='container'>

                    <form method="post" name="addProduct" onSubmit={this.submitHandler}  >

                <div className='row'>
                <div className="col-sm-4">
                    <h6 className="font-weight-normal">Product Name</h6>
                            <input type="product" className="form-control" id="product" placeholder="Product Name *"
                                name="productName" value={this.state.productName} onBlur={this.textValidator} onChange={this.productNameChange} />
                            <div className="errorMsg" style={{ color: 'red' }}><b>{this.state.errors.productName}</b></div>
                        </div>
                        <div className="col-sm-4">
                            <h6 className="font-weight-normal">Company Name</h6>
                            <input type="compName" className="form-control" id="compName" placeholder="Company Name *"
                                name="compName" value={this.state.compName} onBlur={this.textValidator} onChange={this.compNameChange} />
                            <div className="errorMsg" style={{ color: 'red' }}><b>{this.state.errors.compName}</b></div>
                        </div>
                        <div className="col-sm-4">
                            <h6 className="font-weight-normal">Select Image</h6>

                            <input type="file" className="form-control" id="image"
                                name="image" value={this.state.image} onBlur={this.textValidator} onChange={this.imageChange} />
                            <div className="errorMsg" style={{ color: 'red' }}><b>{this.state.errors.image}</b></div>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sp-12; text-center">&nbsp;</div>
                    </div>

                    <div className='row'>

                        <div className="col-sm-4">
                            <h6 className="font-weight-normal">Description</h6>
                            <input type="descrip" className="form-control" id="descrip" placeholder="Description *"
                                name="descrip" value={this.state.descrip} onBlur={this.textValidator} onChange={this.descripChange} />
                            <div className="errorMsg" style={{ color: 'red' }}><b>{this.state.errors.descrip}</b></div>
                        </div>
                        <div className="col-sm-4">
                            <h6 className="font-weight-normal">Price</h6>
                            <input type="number" className="form-control" id="price" placeholder="Price *"
                                name="price" value={this.state.price} onBlur={this.textValidator} onChange={this.priceChange} />
                            <div className="errorMsg" style={{ color: 'red' }}><b>{this.state.errors.price}</b></div>
                        </div>
                        <div className="col-sm-4">
                            <h6 className="font-weight-normal">Discount Price</h6>
                            <input type="number" className="form-control" id="discprice" placeholder="Discount Price *"
                                name="discprice" value={this.state.discprice} onBlur={this.textValidator} onChange={this.discpriceChange} />
                            <div className="errorMsg" style={{ color: 'red' }}><b>{this.state.errors.discprice}</b></div>
                        </div>

                    </div>

                    </form>

                </div>

                <span className="buttons-addproduct">
                <Button onClick={this.submitHandler}>Submit</Button>&nbsp;
              <Link to='/home'>  <button>cancle</button></Link>
              </span>

                </div>
            )
    }

}
