import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar'

import Voitures from './pages/Voitures/Voitures';
import Utilisateurs from './pages/Utilisateurs/Utilisateurs';
import DetailVoiture from './pages/Voitures/DetailVoiture';

function App() {
  return (
    <Router>

      <Navbar />
      <Sidebar />
      <div className="main-container">
        <Switch>
          <Route exact path="/voitures" component={Voitures} />
          <Route exact path="/voitures/detail/:id" component={DetailVoiture} />
          
          <Route exact path="/utilisateurs" component={Utilisateurs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
