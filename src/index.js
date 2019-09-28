import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import reducer from "./reducers/counter"
import thunk from 'redux-thunk';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
//import Component1 from "./component1";
import comboreducer from "./reducers/comboreducer";
import compo1Reducer from "./reducers/compo1Reducer";
import Login from "./components/loginComponent";
import Home from "./components/home";
import AddProduct from "./components/addProduct";
import Signup from "./components/signup";


const middleware = [thunk];



let store = createStore(comboreducer,

    applyMiddleware(thunk)

  //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const state = store.getState();
console.log(state, "state in index..")

store.subscribe(() => console.log(store.getState(), "index..."))

const Root = ({ children }) => (
    <Provider store={store}>{children}</Provider>
);
const routing = (
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/addProduct" component={AddProduct} />
            <Route path="/signup" component={Signup} />


        </div>
    </Router>
)


ReactDOM.render(
    <Root>{routing}</Root>,
    document.getElementById('root')
);
