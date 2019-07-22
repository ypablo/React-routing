import React from 'react';
import Navigation from "./Navigation";
import About from "./About";
import Shop from "./Shop";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
        <Navigation />
        <Route exact path="/about" component={About}/>
        <Route exact path="/shop" component={Shop}/>
       
    </div>
    </Router>
  );
}

export default App;
