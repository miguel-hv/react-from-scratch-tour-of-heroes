import React from "react";
import { useState } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import Heroes from "./components/Heroes/Heroes";
import Input from "./components/Input/Input";

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
    <div className="App">
      <h1>Tour of Heroes</h1>
      <Heroes heroes={heroes}/>
      {/* <Input hero={hero} handleChangeHeroName={handleChangeHeroName}/> */}
    </div>
  );
}

export default hot(module)(App);
