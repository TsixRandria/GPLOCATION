import React from 'react';
import axios from '../../axios';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { userLoginAttempt } from '../../redux/Auth/auth.action';
import ErrorField from '../ErrorField/ErrorField';
import './Login.css';

const SignupSchema = Yup.object().shape({
		nom: Yup.string()
			.required('Le nom s\'il vous plaît.'),
		prenom: Yup.string()
			.required('Le prenom s\'il vous plaît.'),
		telephone: Yup.string()
			.required('Le numero télèphone s\'il vous plaît.'),
		mail: Yup.string()
			.required('L\'adresse email s\'il vous plaît.'),
		password: Yup.string()
			.required('Le mot de pass s\'il vous plaît.')
});
const LoginSchema = Yup.object().shape({

		mail: Yup.string()
			.required('L\'adresse email s\'il vous plaît.'),
		password: Yup.string()
			.required('Le mot de pass s\'il vous plaît.')
});


class Login extends React.Component {
	render() {
		return (
		<>						
					<div className="b-breadCumbs s-shadow wow " >
						<div className="container">
							<a href="home.html" className="b-breadCumbs__page">Home</a><span className="fa fa-angle-right"></span><a href="contacts.html" className="b-breadCumbs__page m-active">Contact Us</a>
						</div>		
					</div>
					<section className="b-contacts s-shadow">
						<div className="container">
							<div className="row">
								<div className="col-xs-6">
									<div className="b-contacts__form">
										<div className="b-contacts__address-hours">
											<h2 className="s-titleDet wow zoomInUp" data-wow-delay="0.5s">J'ai déjà un compte</h2>
										</div>
										<div className="login">
											<Formik
											initialValues={{
												mail: '',
												password: ''
											}}
											validationSchema={LoginSchema}
											onSubmit={(values) => {
												console.log(values);
												console.log(this.props);
												this.props.userLoginAttempt(values);
											}}
											>
												{({ errors, touched, handleSubmit }) => (

											<Form className="contactForm" onSubmit={handleSubmit} autoComplete="off" >
												<Field type="mail" placeholder="Email*"   name="mail"  />
												<ErrorField errors={errors} touched={touched} row="mail"/>

												<Field type="password" placeholder="Mot de passe*"   name="password" />
												<ErrorField errors={errors} touched={touched} row="password"/>
												
												<div className="boutton-login">
												<button type="submit" className="btn m-btn">Valider<span className="fa fa-angle-right"></span></button><br /><br />
												<span ><a href="#" className="oublier">Mot de passe oublié ?</a></span>
												</div>
											</Form>
											)}
											</Formik>
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
								<div className="col-xs-6">
									<div className="b-contacts__address">
										<div className="b-contacts__address-hours">
											<h2 className="s-titleDet wow zoomInUp" data-wow-delay="0.5s">Je n'ai pas de compte</h2>
										</div>
										<div>
										
												<div className="transaction text-justify">
													<div className="login">
													<Formik
														initialValues={{
															nom: '',
															prenom: '',
															telephone: '',
															mail: '',
															password: ''
														}}	
														validationSchema={SignupSchema}
															onSubmit={(values, { resetForm }) => {
																axios.post('/users', values).then(response => {
																	const { action } = this.props;
																	if (response.status === 201) {
																		resetForm();
																		action.getUtilisateur();
																	}
																	
																})
															}}
														>	
														{ ({ values,errors, touched, handleSubmit }) => (																		
															<Form className="contactForm s-form wow" onSubmit={handleSubmit}>

																<Field 	type="text" placeholder="Nom*"   name="nom" />
																<ErrorField errors={errors} touched={touched} row="nom"/>


																<Field 	type="text" placeholder="Prénom*"  name="prenom" id="user-email" />
																<ErrorField errors={errors} touched={touched} row="prenom"/>								
																
																<Field 	type="text" placeholder="Téléphone*" id="user-phone"  name="telephone"   />
																<ErrorField errors={errors} touched={touched} row="telephone"/>

																<Field type="mail" placeholder="Email*"   name="mail"  />
																<ErrorField errors={errors} touched={touched} row="mail"/>

																<Field type="password" placeholder="Mot de passe*"   name="password" />
																<ErrorField errors={errors} touched={touched} row="password"/>


																
																<p>* Champs obligatoires</p>
																<center><button type="submit" className="btn m-btn">Valider<span className="fa fa-angle-right"></span></button></center>
															
															</Form>
														) }
													</Formik>		
													</div>
											
											
													<div className="content-titre">
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

}


const mapDispatchToProps = (dispatch) => {
    return {
        userLoginAttempt: (values) => dispatch(userLoginAttempt(values))
    }
}

export default connect(null, mapDispatchToProps)(Login);