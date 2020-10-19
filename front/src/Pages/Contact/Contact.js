import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import './Contact.css';

function onChange(value) {
  console.log("Captcha value:", value)
}

class Contact extends React.Component {
	render() {
		return (

			<>

				<div className="b-breadCumbs" data-wow-delay="0.5s" >
					<div className="container">
						<a href="/" className="b-breadCumbs__page">ACCUEIL</a><span className="fa fa-angle-right"></span><a href="#" className="b-breadCumbs__page m-active">Contact</a>
					</div>
				</div>

				

				<section className="b-contacts s-shadow">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div className="b-contacts__form">
									<header className="b-contacts__form-header s-lineDownLeft wow zoomInUp" data-wow-delay="0.5s">
										<h2 className="s-titleDet">Formulaire de contact</h2> 
									</header>
									<p className=" wow zoomInUp" data-wow-delay="0.5s">Pour nous contacter, merci de remplir le formulaire ci-dessous.</p>
									<div id="success"></div>
									<form id="contactForm" noValidate className="b-contacts__address-hours-main s-form wow zoomInUp" data-wow-delay="0.5s">
										
										<input type="text" placeholder="Nom" defaultValue="" name="user-name" id="user-name" />
										<input type="text" placeholder="Prénom" defaultValue="" name="user-name" id="user-lastname" />

										<input type="text" placeholder="Email" defaultValue="" name="user-email" id="user-email" />
										<input type="text" placeholder="Téléphone" defaultValue="" name="user-phone" id="user-phone" />
										<textarea id="user-message" name="user-message" placeholder="Message"></textarea>
										<p className="p">* Champs obligatoires</p>
										<fieldset><ReCAPTCHA sitekey="6LdXP9cZAAAAAOjXVT_t6gXbM8gNuQXyvK9qPhr2" onChange={onChange} /></fieldset>

										<button type="submit" className="btn m-btn" id="button">VALIDER    <span className="fa fa-angle-right"></span></button>
										
									</form>
								</div>
							</div>
							<div className="col-md-6" textAlign ="">
								<div className="b-contacts__address">
									<div className="b-contacts__address-hours">
										<h2 className="s-titleDet wow zoomInUp" data-wow-delay="0.5s">Service client</h2>
										<div className="b-contacts__address-hours-main wow zoomInUp" data-wow-delay="0.5s">
											<div className="row">
												<div className="text-center">
													<h5>Vous avez des questions ou des remarques ? Appelez-nous au <br/> 06 92 370 380 !</h5>
												</div>
											</div>
										</div>
									</div>
									<div className="b-contacts__address-hours">
										<h2 className="s-titleDet wow zoomInUp" data-wow-delay="0.5s">Site Internet</h2>
										<div className="b-contacts__address-hours-main wow zoomInUp" data-wow-delay="0.5s">
											<div className="row">
												<div className="text-center">
													<h5>Vous rencontrez une difficulté lors de votre réservation sur notre site ? Vous souhaitez nous faire part d'un bug ?</h5>

															<p>Merci de remplir le formulaire ci-contre.</p>
												</div>
											</div>
										</div>
									</div>
									<div className="b-contacts__address-info">
										<h2 className="s-titleDet wow zoomInUp" data-wow-delay="0.5s">A PROPOS</h2>
										<address className="b-contacts__address-info-main wow zoomInUp" data-wow-delay="0.5s">
											<div className="b-contacts__address-info-main-item">
												<div className="row">
													<div className="col-lg-4 col-md-4 col-xs-12">
														<span className="fa fa-home"></span>
														ADRESSE
													</div>
													<div className="col-lg-8 col-md-8 col-xs-12">
														<em>34 Rue de la Plantation - 97438 Sainte-Marie</em>
													</div>
												</div>
												
											</div>
											<div className="b-contacts__address-info-main-item">
												<div className="row">
													<div className="col-lg-4 col-md-4 col-xs-12">
														<span className="fa fa-phone"></span>
														TELEPHONE
													</div>
													<div className="col-lg-8 col-md-8 col-xs-12">
														<em>06 92 370 380</em>
													</div>
												</div>
											</div>
											<div className="b-contacts__address-info-main-item">
												<div className="row">
													<div className="col-lg-4 col-md-4 col-xs-12">
														<span className="fa fa-envelope"></span>
														EMAIL
													</div>
													<div className="col-lg-8 col-md-8 col-xs-12">
														<em>infos@gplocation.fr</em>
													</div>
												</div>
											</div>
										</address>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<div className="b-map wow zoomInUp" data-wow-delay="0.5s">
					<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14910.02604721598!2d55.511276!3d-20.891932!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdd91245bf0d2d552!2sGP+Location!5e0!3m2!1sfr!2sfr!4v1483431590185" width="1300" height="400" frameborder="0"																												 allowfullscreen></iframe>
				</div>

				<div className="b-features">
					<div className="container">
						<div className="row">
							<div className="col-md-9 col-md-offset-3 col-xs-6 col-xs-offset-6">
								<ul className="b-features__items">
									<li className="wow zoomInUp" data-wow-delay="0.3s" data-wow-offset="100">Merci de remplir le formulaire ci-dessus.</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				
					
			</>

		)
	}
}


export default Contact;