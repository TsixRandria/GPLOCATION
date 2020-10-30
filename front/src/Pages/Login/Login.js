
import React from 'react';

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
						<a href="/" class="b-breadCumbs__page">Accueil</a><span class="fa fa-angle-right"></span><a href="/Login" class="b-breadCumbs__page m-active">Espace client</a>
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
										<form id="contactForm" novalidate class="s-form wow zoomInUp" data-wow-delay="0.5s">
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
													<center><button type="submit" class="btn m-btn" id="valider">Valider<span class="fa fa-angle-right"></span></button></center>

												</form>
											</div>
                      <section className="b-more" >
											<p><span className="text-bold">Age minimum :</span> 23 ans</p>
                          <p><span className="text-bold"> Nombre minimum d'année de permis :</span> 2 ans</p>
                          <p><span className="text-bold"> Moyen de paiement :</span>23 ans</p> <br />
                          <p>Acompte suivant le montant de la réservation :</p>
                              <div className="list-detail">
                                  <ul>
                                      <li>moins de 150€ : paiement de la totalité en ligne par CB</li>
                                      <li>plus de 150€ : acompte de 100€ par tranche de 500€ par CB, le solde une fois sur place par carte bancaire, espèces ou chèque.</li>

                                  </ul>
                              </div>

                              <h2 className="tire-assurance">Assurances</h2>
                                  <p> <span className="text-bold">Assurance :</span>   Tous risques et vol avec franchise.</p>
                                  <p> <span className="text-bold">Montant de la franchise :</span>   1000€</p>
                                  <p> <span className="text-bold">Caution :</span>   1000€ sur place par pré-autorisation bancaire (non encaissée).</p>

                              <h2  className="tire-assurance">Prise en charges</h2>
                                  <p> <span className="text-bold">A l'aéroport Roland Garros :</span>   Votre loueur vous prend en charge personnellement à l'aéroport. Ceci vous évitera d'attendre au comptoir de l'aéroport après de nombreuses heures de vols et de payer la taxe d'aéroport.</p>
                                  <p> <span className="text-bold">Sainte-Marie : </span>   Votre loueur vous prend en charge personnellement à l'aéroport. Ceci vous évitera d'attendre au comptoir de l'aéroport après de nombreuses heures de vols et de payer la taxe d'aéroport.</p>
                                  <p><span className="option-covid">Option annulation covid :</span>  En cas d'annulation, l'acompte sera remboursable par le loueur s'il est prévenu jusqu'à 6 heures avant le départ  quelque soit la raison sans justificatif à présenter.   Si elle est payante, cette option ne sera par contre pas remboursée.</p>
											<div >
												<h1 >Protection des données</h1>
											</div>
											<p >
												Les informations recueillies font l'objet d'un traitemant informatique pour permettre à GP Location d'exécuter la réservation à distance. Si vous ne remplissez pas les champs obligatoires nous ne serons pas en mesure de vous fournir votre bon de réservation.
												Conformément à la loi "informatique et libertés" du 6 janvier 1978, vous bénéficiez d'un droit d'accès et de rectification aux informations qui vous concernent. Si vous souhaitez exercer ce droit et obtenir communication des informations vous concernant, veuillez vous adresser au service client internet via notre formulaire de contact.
														</p>
                            </section>
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

}


export default Login;