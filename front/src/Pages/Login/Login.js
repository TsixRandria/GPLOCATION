import React, { Component } from 'react';

import './Login.css'

class Login extends Component {
    render() {
        return (
            <div>

               <div className="contenu2">
                   <div className="Container">

                        <div className="row">
                            <div className="col-md-6 col-xs-12">
                                <div className="success2">
                                    <h1 className="title">Se connecter</h1>  
                                        <form id="contactForm" noValidate className="s-form wow zoomInUp" data-wow-delay="0.5s">
                                            <input type="text" placeholder="VOTRE EMAIL" defaultValue="" name="email" id="name" />
                                            <input type="password" placeholder="VOTRE MOT DE PASSE" defaultValue="" name="user-name" id="name" />
                                            <div className="button1">
                                                    <button type="submit" className="btn m-btn" id="button2">CONNEXION<span className="fa fa-angle-right"></span></button><br></br>   
                                            </div>
                                            <a className="oubli">Mot de passe oublié ?</a>
                                        </form>
                                </div>
                            </div>
                            <div className="col-md-6 col-xs-12">
                                <div id="success" class="success3">
                                    <h2 className="sous1">Sécurité de paiement</h2>  
                                        <section className="content2"> 
                                            <div className="col-md-12 col-xl-12">
                                                <img src="media/brands/aristeia.png" alt="brand" /> <br></br>
                                            </div>
                                                <p className=" text-justify md:text-xl">
                                                    Les transactions PayPlug sont effectuées sur un lien HTTPS établi entre le client et le serveur de paiement. Les données sensibles, telles que le numéro de carte bancaire du client et sa date d'expiration, sont entièrement cryptées et protégées grâce à un protocole SSL afin d'empêcher que les informations échangées puissent être interceptées en clair par un tiers au cours de la transaction.
                                                    Les numéros de cartes sont cryptés instantanément et ne sont pas accessibles par GP Location. De plus, PayPlug ne conserve pas les numéros de carte et s'appuie sur une infrastructure sécurisée agréée par Visa, Mastercard, et le Groupement des Cartes Bancaires selon la norme PCI-DSS au même titre que les meilleures solutions de paiement proposées par les autres banques.
                                                    Toutes les pages du site web PayPlug, ainsi que les liens de transmission sont sécurisés en SSL et bénéficient d'un certificat de sécurité Thawte Extended Validation.
                                                </p>
                                        </section>

                  
                                </div>
                            </div>
                        </div>
                    </div>
				</div>
            </div>
        )
    }
}
export default Login;