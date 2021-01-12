import './App.css';
import React from "react";
import MapStates from "./MapStates/MapStates";
import MapEurope from "./MapEurope/MapEurope";
import Nav from "./Nav/Nav";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    <Nav />
      <Switch>
        <Route path="/coronavirus-map" exact component={MapStates}/>
        <Route path="/europe" component={MapEurope}/>
        <Route path="/states" component={MapStates}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
