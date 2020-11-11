import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './Pages/Header/Header.js';
import HomePages from './Pages/HomePages/HomePage.js';
import Contact from './Pages/Contact/Contact.js';
import Login from './Pages/Login/Login.js';
import Signup from './Pages/Signup/Signup.js';
import Aeroport from './Pages/Aeroport/Aeroport.js';
import Saint from './Pages/Saint/Saint.js';
import Condition from './Pages/Condition/Condition.js';
import Reserver from './Pages/HomePages/Components/Reservation/Reserver/Reserver.js';
import Profil from './Pages/Login/Profil/Profil';
import NotFound from './Pages/404/NotFound'

import Mentions from './Pages/Mentions/Mentions.js';

import Footer from './Pages/Footer/Footer.js';

//import './App.scss';


function App() {
  return (
    <BrowserRouter>
        <Header /> 
        <Switch>
          <Route exact path='/' component={HomePages} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/login' component={Login} />
          {/* <Route exact path='/Signup' component={Signup} /> */}
          <Route exact path='/aeroport' component={Aeroport}/>
          <Route exact path='/sainte-marie' component={Saint}/>
          <Route exact path='/condition' component={Condition}/>
          <Route exact path='/mentions-legales' component={Mentions}/>
          <Route exact path='/reserver/:date_depart/:date_retour/:id' component={Reserver}/>
          <Route exact path='/profil' component={Profil}/>
          <Route component={NotFound}/>
        </Switch>
        <Footer /> 
    </BrowserRouter>
  );
}

export default App;
