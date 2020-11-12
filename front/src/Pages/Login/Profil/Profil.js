import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Profil.css';
class Profil extends Component {


    render() {
        let propos = this.props;
        return (
            <div>

                <section className="b-contacts s-shadow">
                    <div className="container">
                        {console.log(this.props.panjifa)}
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="b-contacts__form">
                                    <div className="login">
                                    <div className="transaction text-justify">
                                        <div className="contentTitle">
                                        <h2>Mes coordonnées</h2>
                                        </div>
                                        <form id="contactForm" className="contactForm" noValidate className="s-form wow zoomInUp" data-wow-delay="0.5s">
                                            <div className="paddingp">
                                                <b>Nom :</b>
                                                <input type="text" className="cacheform" id="nom" name="nom" value="tsiory" />
                                                <b>Prénom :</b>
                                                <input type="text" className="cacheform cc_cursor" id="prenom" value="marco" name="prenom" />
                                                <b>Email :</b>
                                                <input type="text" className="cacheform hack_email_modifcompte cc_cursor" id="email1" value="tsiro@gmail.com" name="email1" />
                                                <b>Téléphone :</b>
                                                <input type="text" className="cacheform" id="telfixe" value="02400021" name="telfixe" />
                                            </div>
                                        </form>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                           
                            <div className="col-xs-6">
                                <div className="b-contacts__address">
                                    <div className="transaction text-justify">
                                        <div className="login">
                                        <div className="contentTitle">
                                        <h2>Modifier mon mot de passe</h2>
                                        </div>
                                            <form id="contactForm" className="contactForm" noValidate className="s-form wow zoomInUp" data-wow-delay="0.5s">
                                                <input type="text" placeholder="Nouveau Mot de passe*" value="" name="user-phone" id="user-phone" />
                                                <input type="text" placeholder="Confirmation*" value="" name="user-phone" id="user-phone" />
                                                
                                                <center><button type="submit" className="btn m-btn" id="valider">Valider<span className="fa fa-angle-right"></span></button></center>
                                            </form>
                                        </div>
                    
                                    </div>
                                    <div className="content">
                                    <div className="transaction text-justify">
                                        <div className="contentTitle">
                                        <h2>Liste de mes réservations</h2>
                                        </div>
                                       <p>Aucune réservations</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                              
                            
                           
                              
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Profil
