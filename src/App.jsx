import React from "react";
import { useState } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import Heroes from "./components/Heroes/Heroes";
import Input from "./components/Input/Input";

const INITIAL_STATE = {
  id: 1,
  name: 'Mi héroe',
}

const App = ()=> {

  const [hero, setHero] = useState(INITIAL_STATE); 

  const handleChangeHeroName = (fieldName, value ) => {
    
    setHero({...hero, [fieldName]:value});
  }

  return (
    <div className="App">
      <h1>Tour of Heroes</h1>
      <Heroes hero={hero}/>
      <Input hero={hero} handleChangeHeroName={handleChangeHeroName}/>
    </div>
  );
}

export default hot(module)(App);
