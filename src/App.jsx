import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader";

import Hero from './components/';

import "./App.css";

const App = ()=> {
    return(
        // <Router>
            <div className="app">
                {/* <Navbar />

                <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route exact path="/heroes" component={AllHeroes}/>
                </Switch> */}
               <Hero/>
            </div>
        // </Router>
       
    );     
}

export default hot(module)(App);