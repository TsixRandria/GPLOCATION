import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar'

import Voitures from './pages/Category/Voitures/Voitures';
import Categories from './pages/Category/Categories';
import Utilisateurs from './pages/Utilisateurs/Utilisateurs';
import DetailVoiture from './pages/Category/Voitures/DetailVoiture';
import Login from './pages/Login/Login';
import ClientMessage from './pages/Message/ClientMessage';
import Tarif from './pages/ConfigurationAgence/Tarif/Tarif';
import TarifPersonnaliser from './pages/ConfigurationAgence/Tarif/TarifPeronnaliser';
import Planning from './pages/Planning/Planning';
import ConfigurationAgence from './pages/ConfigurationAgence/ConfigurationAgence';
import GestionSaison from './pages/ConfigurationAgence/GestionSaison/GestionSaison';
import Editer from './pages/Category/Editer/Editer';
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
                    <Route exact path="/categories" component={Categories} />
                    <Route exact path="/configuration_agence" component={ConfigurationAgence} />
                    <Route exact path="/gestion_saison" component={GestionSaison} />
                    <Route exact path="/voitures/detail/:id" component={DetailVoiture} />
                    <Route exact path="/utilisateurs" component={Utilisateurs} />
                    <Route exact path="/ClientMessage" component={ClientMessage} />
                    <Route exact path="/tarif" component={Tarif} />
                    <Route exact path="/tarifpersonnalise" component={TarifPersonnaliser} />
                    <Route exact path="/planning" component={Planning} />
                    <Route exact path="/dashbord" component={Dashbord} />
                    <Route exact path="/voitures" component={Voitures} />
                    <Route exact path="/categories/:id" component={Editer} />
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
