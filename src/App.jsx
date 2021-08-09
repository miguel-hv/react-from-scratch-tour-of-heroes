import React from "react";
import { useState, useContext } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Dashboard, HeroDetail, Heroes, Input, Navbar } from './components';
import "./App.css";
import DarkMode from "./components/DarkMode/DarkMode";


const INITIAL_THEME = {
  backgroundColor: 'white',
  color: 'black',
};

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

export const ThemeContext = React.createContext(INITIAL_THEME);
export const HeroesContext = React.createContext(INITIAL_STATE);

function App() {

  const [heroes, setHeroes] = useState(INITIAL_STATE); 
  const [theme, setTheme] = useState(INITIAL_THEME);

  const changeTheme = (theme)=> {
    console.log('tema: ', theme);
    return setTheme(theme); }

  return (
    <Router>
    <ThemeContext.Provider value={{theme, changeTheme}}>
      <div className="App" style={theme}>
        <h1>Tour of Heroes</h1>
        <Navbar/>
        <DarkMode />
        <Switch>
          <HeroesContext.Provider value={heroes}>
            <Route exact path={["/dashboard", "/"]} render={(props)=> <Dashboard {...props}/>}/>
            <Route exact path="/heroes" render={(props)=> <Heroes {...props}/>}/>
            <Route exact path="/details/:id" render={(props) => <HeroDetail {...props}/>}/>
          </HeroesContext.Provider>
          {/* <Input hero={hero} handleChangeHeroName={handleChangeHeroName}/> */}
        </Switch>
      </div>
    </ThemeContext.Provider>
    </Router>
  );
}

export default hot(module)(App);
