import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import Navbar from './components/Navbar/Navbar';
import AddVoiture from './pages/Voitures/AddVoiture';
import ListeVoiture from './pages/Voitures/ListeVoiture'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      
        <Route exact path="/voitures/liste" component={ListeVoiture} />
        <Route exact path="/voitures/add" component={AddVoiture} />
      </Switch>
    </Router>
  );
}

export default App;
