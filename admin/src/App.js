import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar'

import Voitures from './pages/Voitures/Voitures';
import Utilisateurs from './pages/Utilisateurs/Utilisateurs';
import DetailVoiture from './pages/Voitures/DetailVoiture';
import Login from './pages/Login/Login';

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
                    <Route exact path="/voitures/detail/:id" component={DetailVoiture} />
                    <Route exact path="/utilisateurs" component={Utilisateurs} />
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
