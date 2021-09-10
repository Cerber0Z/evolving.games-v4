
import React from 'react';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Playstation from '../../view/categories/Playstation'
import Xbox from '../../view/categories/Xbox'
import Nintendo from '../../view/categories/Nintendo'
import PageNotFound from "../../view/PageNotFound"
import Homepage from '../../view/categories/Homepage'
import Gamepage from '../../components/gamepage/gamepage';

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
          <Xbox />
        </Route>
        <Route exact path="/nintendo" >
          <Nintendo />
        </Route>
        <Route exact path="/playstation/:id">
          <Gamepage/>
        </Route>
        <Route path="*">
          <PageNotFound/>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
