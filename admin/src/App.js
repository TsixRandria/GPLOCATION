import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar'

import Accueil from './pages/Accueil/Accueil';
import Voitures from './pages/Voitures/Voitures';
import Categories from './pages/Category/Categories';
import Parcourir from './pages/Voitures/Parcourir/Parcourir';
import Utilisateurs from './pages/Utilisateurs/Utilisateurs';
import DetailVoiture from './pages/Voitures/DetailVoiture';
import Login from './pages/Login/Login';
import ClientMessage from './pages/Message/ClientMessage';
import Tarif from './pages/ConfigurationAgence/Tarif/Tarif';
import TarifPersonnaliser from './pages/ConfigurationAgence/Tarif/TarifPeronnaliser';
import Planning from './pages/Planning/Planning';
import ConfigurationAgence from './pages/ConfigurationAgence/ConfigurationAgence';
import GestionSaison from './pages/ConfigurationAgence/GestionSaison/GestionSaison';
import Editer from './pages/Voitures/Parcourir/Editer/Editer';
import Dashbord from './pages/Dashbord/Dashbord';
import axios from './axios';
import Reservation from './pages/Reservation/Reservation';
import AddTarif from './pages/ConfigurationAgence/Tarif/AddTarif';
import TarifDeBase from './pages/ConfigurationAgence/Tarif/TrifDeBase';
import TarifList from './pages/ConfigurationAgence/Tarif/TarifList';

import GestionOF from './pages/ConfigurationAgence/GestionOF/GestionOF';
      
// import Table from './pages/Tableau/Table';


class App extends React.Component {
  state = {
    categories: [],
    tarif: [],
    voiture: []
  }
  
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
                    <Route exact path="/" component={Accueil} />
                    <Route exact path="/voitures" component={Voitures} />
                    <Route exact path="/parcourir" component={Parcourir} />
                    <Route exact path="/editer" component={Editer} />
                    <Route exact path="/configuration_agence" component={ConfigurationAgence} />
                    <Route exact path="/gestion_saison" component={GestionSaison} />
                    <Route exact path="/voitures/detail/:id" component={DetailVoiture} />
                    <Route exact path="/utilisateurs" component={Utilisateurs} />
                    <Route exact path="/ClientMessage" component={ClientMessage} />
                    <Route exact path="/tarif" component={Tarif} />
                    <Route exact path="/ouverture" component={GestionOF} />
                    <Route exact path="/tarifpersonnalise" component={TarifPersonnaliser} />
                    <Route exact path="/planning" component={Planning} />
                    <Route exact path="/dashbord" component={Dashbord} />
                    <Route exact path="/categories" component={Categories} />
                    <Route exact path="/reservations" component={Reservation} />
                    <Route path="/ajouter_un_tarif/:id" component={AddTarif } />
                    <Route path="/tarif_de_base" component={TarifDeBase} />
                    <Route path="/tarif_list" component={TarifList} />
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
