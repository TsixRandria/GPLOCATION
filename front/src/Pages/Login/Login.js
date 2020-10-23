<<<<<<< HEAD
import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import ErrorField from '../ErrorField/ErrorField';
import axios from '../../axios'
import './Login.css';

const ContactSchema = Yup.object().shape({
    nom: Yup.string()
        .required('Le nom ne doit pas être vide'),
    prenom: Yup.string()
		.required('Le prenom ne doit pas être vide'),
	email: Yup.string()
		.required('le Mail ne doit pas être vide'),
	telephone: Yup.string()
		.required('Telephone ne doit pas être vide'),
	message: Yup.string()
		.required('Le message ne doit pas être vide')

		
});

function onChange(value) {
  console.log("Captcha value:", value)
}

class Login extends React.Component {
	render() {
		return (

			<>
						
			<div class="b-breadCumbs s-shadow wow " >
						<div class="container">
							<a href="home.html" class="b-breadCumbs__page">Home</a><span class="fa fa-angle-right"></span><a href="contacts.html" class="b-breadCumbs__page m-active">Contact Us</a>
						</div>
					
			</div>
					<section class="b-contacts s-shadow">
						<div class="container">
							<div class="row">
								<div class="col-xs-6">
									<div class="b-contacts__form">
										<div class="b-contacts__address-hours">
											<h2 class="s-titleDet wow zoomInUp" data-wow-delay="0.5s">J'ai déjà un compte</h2>
										</div>
										<div className="login">
											<form id="contactForm"novalidate class="s-form wow zoomInUp" data-wow-delay="0.5s">
												<input type="text" placeholder="Mon e-mail" value="" name="user-name" id="user-name" />
												<input type="text" placeholder="Mon mot de passe" value="" name="user-email" id="user-email" />
												
												<div className="boutton-login">
												<button type="submit" class="btn m-btn">Valider<span class="fa fa-angle-right"></span></button><br /><br />
												<span ><a href="#" className="oublier">Mot de passe oublié ?</a></span>
												</div>
											</form>
										</div>	
									</div>
									<div className="content">
										<div className="transaction text-justify">
											<div className="content-title">
												<h1 className="title-1">Sécurité de paiement</h1>
											</div>
											<p className="text-1">
												<div className="col-sm-4"><img className="img-responsive" src="images/elements/1.png" alt="" /></div>Les transactions PayPlug sont effectuées sur un lien HTTPS établi entre le client et le serveur de paiement. Les données sensibles, telles que le numéro de carte bancaire du client et sa date d'expiration, sont entièrement cryptées et protégées grâce à un protocole SSL afin d'empêcher que les informations échangées puissent être interceptées en clair par un tiers au cours de la transaction.<br />
												Les numéros de cartes sont cryptés instantanément et ne sont pas accessibles par GP Location. De plus, PayPlug ne conserve pas les numéros de carte et s'appuie sur une infrastructure sécurisée agréée par Visa, Mastercard, et le Groupement des Cartes Bancaires selon la norme PCI-DSS au même titre que les meilleures solutions de paiement proposées par les autres banques.<br />
												Toutes les pages du site web PayPlug, ainsi que les liens de transmission sont sécurisés en SSL et bénéficient d'un certificat de sécurité Thawte Extended Validation.
											</p>
										</div>
									</div>
								</div>
								<div class="col-xs-6">
									<div class="b-contacts__address">
										<div class="b-contacts__address-hours">
											<h2 class="s-titleDet wow zoomInUp" data-wow-delay="0.5s">Je n'ai pas de compte</h2>
										</div>
										<div>
										
												<div className="transaction text-justify">
												<div className="login">
												<form id="contactForm" className="contactForm" novalidate class="s-form wow zoomInUp" data-wow-delay="0.5s">
													<input type="text" placeholder="Nom*" value="" name="user-name" id="user-name" />
													<input type="text" placeholder="Prénom*" value="" name="user-email" id="user-email" />
													<input type="text" placeholder="Téléphone*" value="" name="user-phone" id="user-phone" />
													<input type="text" placeholder="Email*" value="" name="user-email" id="user-email" />
													<input type="text" placeholder="Mot de passe*" value="" name="user-phone" id="user-phone" />


													
													<p>* Champs obligatoires</p>
													<button type="submit" class="btn m-btn" id="valider">Valider<span class="fa fa-angle-right"></span></button>
													
												</form>
													</div>
											
											
													<div className="content-title">
														<h1 className="title-1">Protection des données</h1>
													</div>
														<p className="text-1">
															Les informations recueillies font l'objet d'un traitemant informatique pour permettre à GP Location d'exécuter la réservation à distance. Si vous ne remplissez pas les champs obligatoires nous ne serons pas en mesure de vous fournir votre bon de réservation.
															Conformément à la loi "informatique et libertés" du 6 janvier 1978, vous bénéficiez d'un droit d'accès et de rectification aux informations qui vous concernent. Si vous souhaitez exercer ce droit et obtenir communication des informations vous concernant, veuillez vous adresser au service client internet via notre formulaire de contact.
														</p>
														</div>
												</div>
											
										</div>
								</div>
							</div>
						</div>
					</section>			
			</>

		)
	}
=======
import React, { Component } from 'react';

import './Login.css';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from '../../axios';

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
                                    <Formik
                                    initialValues={{
                                        email: '',
                                        password: ''
                                    }}

                                    onSubmit={(values, { resetForm }) => {
               
                                        axios.post('/users/sign_in', values).then(response => {
                                            if (response.status === 201) {
                                                resetForm();
                                            }
                                        })
                                    }}
                                    > 
                                        <Form id="contactForm" noValidate className="s-form wow zoomInUp" data-wow-delay="0.5s">
                                            <Field type="text" placeholder="VOTRE EMAIL" defaultValue="" name="email" id="email" />
                                            <Field type="password" placeholder="VOTRE MOT DE PASSE" defaultValue="" name="password" />
                                            <div className="button1">
                                                    <button type="submit" className="btn m-btn" id="button2">CONNEXION<span className="fa fa-angle-right"></span></button><br></br>   
                                            </div>
                                            <a className="oubli">Mot de passe oublié ?</a>
                                        </Form>
                                    </Formik>
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
>>>>>>> 6dcdbb00f6b8b52a253881417601554648132a6c
}


export default Login;