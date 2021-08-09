import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader";

import Heroes from './components/Heroes/Heroes';

import "./App.css";

const App = ()=> {
    return(
            <div className="app">

               <Heroes/>
            </div>
       
    );     
}

export default hot(module)(App);