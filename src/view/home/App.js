
import React from 'react';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Playstation from '../../view/categories/Playstation'
import Xbox from '../../view/categories/Xbox'
import Nintendo from '../../view/categories/Nintendo'
import Homepage from '../../view/categories/Homepage'
import Gamepage from '../../components/gamepage/gamepage';
import CarShop from '../../components/Carrito/carrito'

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route exact path="/" >
          <Homepage />
        </Route>
        <Route exact path="/playstation" >
          <Playstation />
        </Route>
        <Route exact path="/xbox" >
          {/* <Xbox /> */}
          <Playstation />
        </Route>
        <Route exact path="/carshop" >
          <CarShop />
        </Route>
        <Route exact path="/nintendo" >
          {/* <Nintendo /> */}
          <Playstation />
        </Route>
        <Route exact path="/playstation/:id">
          <Gamepage/>
        </Route>
    
      </Switch>
    </div>
  </Router>
  );
}

export default App;
