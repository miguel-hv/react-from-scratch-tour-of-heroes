import React from "react";
import { useState } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Dashboard, HeroDetail, Heroes, Input, Navbar } from './components';
import "./App.css";


const INITIAL_STATE = [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];


function App() {

  const [heroes, setHeroes] = useState(INITIAL_STATE); 

  return (
    <Router>
      <div className="App">
        <h1>Tour of Heroes</h1>
        <Navbar/>
        <Switch>
          <Route exact path={["/dashboard", "/"]} render={(props)=> <Dashboard {...props} heroes={heroes}/>}/>
          <Route exact path="/heroes" render={(props)=> <Heroes {...props} heroes={heroes}/>}/>
          <Route exact path="/details/:id" render={(props) => <HeroDetail {...props} heroes={heroes}/>}/>
          {/* <Input hero={hero} handleChangeHeroName={handleChangeHeroName}/> */}
        </Switch>
      </div>
    </Router>
  );
}

export default hot(module)(App);
