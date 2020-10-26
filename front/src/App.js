import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Pages/Header/Header.js';

import HomePages from './Pages/HomePages/HomePage.js';
import Contact from './Pages/Contact/Contact.js';
import Login from './Pages/Login/Login.js';
import Aeroport from './Pages/Aeroport/Aeroport.js';
import Saint from './Pages/Saint/Saint.js';
import Condition from './Pages/Condition/Condition.js';
import Mentions from './Pages/Mentions/Mentions.js';

import Footer from './Pages/Footer/Footer.js';

//import './App.scss';



class App extends React.Component {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <Router>
        <>
          <Header />                             
          <Switch>
            <Route exact path='/' component={HomePages} />
            <Route exact path='/Contact' component={Contact} />
            <Route exact path='/Aeroport' component={Aeroport}/>
            <Route exact path='/Sainte-Marie' component={Saint}/>
            <Route exact path='/Condition' component={Condition}/>
            <Route exact path='/Mentions-legales' component={Mentions}/>
            <Route exact path="/login" component={Login} />
          </Switch>
          
          <Footer />  
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