import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar'

import Voitures from './pages/Voitures/Voitures';
import Categories from './pages/Category/Categories';
import Parcourir from './pages/Voitures/Parcourir/Parcourir';
import Utilisateurs from './pages/Utilisateurs/Utilisateurs';
import DetailVoiture from './pages/Voitures/DetailVoiture';
import Login from './pages/Login/Login';
import ClientMessage from './pages/Message/ClientMessage';
import Tarifs from './pages/ConfigurationAgence/TarifDeBase/Tarifs';
import TarifPersonnaliser from './pages/ConfigurationAgence/Tarifpersonnalisé/TarifPeronnaliser';
import Planning from './pages/Planning/Planning';
import ConfigurationAgence from './pages/ConfigurationAgence/ConfigurationAgence';
import GestionSaison from './pages/ConfigurationAgence/GestionSaison/GestionSaison';
import Editer from './pages/Voitures/Parcourir/Editer/Editer';
import Dashbord from './pages/Dashbord/Dashbord';
// import Table from './pages/Tableau/Table';


class App extends React.Component {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <Router>
        <>
          { isAuthenticated ?
            (
              <>
                <Navbar />
                <Sidebar />
                <div className="main-container">

                  <Switch>
                    <Route exact path="/voitures" component={Voitures} />
                    <Route exact path="/parcourir" component={Parcourir} />
                    <Route exact path="/editer" component={Editer} />
                    <Route exact path="/configuration_agence" component={ConfigurationAgence} />
                    <Route exact path="/gestion_saison" component={GestionSaison} />
                    <Route exact path="/voitures/detail/:id" component={DetailVoiture} />
                    <Route exact path="/utilisateurs" component={Utilisateurs} />
                    <Route exact path="/ClientMessage" component={ClientMessage} />
                    <Route exact path="/tarifs" component={Tarifs} />
                    <Route exact path="/tarifpersonnalise" component={TarifPersonnaliser} />
                    <Route exact path="/planning" component={Planning} />
                    <Route exact path="/dashbord" component={Dashbord} />
                    <Route exact path="/categories" component={Categories} />
                  </Switch>
                </div>
              </>
            ) : (
              <Switch>
                <Route exact path="*" component={Login} />
              </Switch>
            )
          }
        </>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.auth
  }
}

export default connect(mapStateToProps)(App);
