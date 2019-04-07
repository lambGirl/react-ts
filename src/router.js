import React from 'react'
import {   BrowserRouter as Router, Switch,Route,withRouter } from "react-router-dom";
import App from './App';
import About from './About'
export default  ()=>{
    return  <Router>
        <Switch>
            <Route path="/" Switch component={App}></Route>
            <Route path="/About" component={About} />
        </Switch>
    </Router>
}