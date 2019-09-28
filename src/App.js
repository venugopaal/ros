
import { Component } from 'react';
import React from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';
import './App.css';
//import Component1 from "./component1"



class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count:0
        }
        this.dipatcher1 = this.dipatcher1.bind(this)
        this.dipatcher2 = this.dipatcher2.bind(this)


    }



   // let dipatch = useDispatch();
    dipatcher1() {

        this.props.dispatch({ type: 'INCREMENT' });
    }
    dipatcher2() {

    }
    render() {

        console.log(this.props, "props in app.js...")
        console.log(this.state,"state in app.js")

        return (
            <div className="App">
                {/*    <h1>A {this.props.state}</h1>

                <button onClick={this.dipatcher1}>+</button>
                <button onClick="dipatcher2()">-</button>
                */}


            </div>
        );
    }
}

function mapStateToProps(store) {
   // const state = store.getState();
    return {
      //  comp1: store.compo1reducer.comp1,
        count: store,
       // venu: "good",
       // compo1: state.component1
    };
}
export default connect(mapStateToProps,

)(App);
