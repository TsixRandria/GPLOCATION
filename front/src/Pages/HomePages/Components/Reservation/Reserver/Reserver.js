
import React from 'react';
import {Link} from 'react-router-dom';
import './Reserver.css';


class Reserver extends React.Component {
	render() {
		return (

			<>
               	<div className="b-breadCumbs s-shadow wow " >
					<div className="container">
						<a href="/" className="b-breadCumbs__page">Accueil</a><span className="fa fa-angle-right"></span><a href="/Reserver" className="b-breadCumbs__page m-active">Finalisation du réservation</a>
					</div>
                    <h1 className="grandTitre">Finalisation de ma réservation</h1>
				</div>
				<section className="b-contacts s-shadow">
					<div className="container">
                   
						<div className="row">
							<div className="col-xs-6">
								<div className="b-contacts__form">
								<div className="login">
										<form id="contactForm" novalidate className="s-form wow zoomInUp" data-wow-delay="0.5s">
											<div className="b-contacts__address-hours">
											<p className="conf_categ">Citroën C1 ou Toyota Aygo</p>
											<div className="bouttonModif"><button className="modifier">Modifier</button></div>
											<img className="img-responsive center-block" src="media/blog/nissanBlogTwo.jpg" alt="nissan" />
											<ul className="listeReserve">
												<li className="prise"><span></span><b>Prise en charge à l'aéroport</b></li>
												<li className="prise"><span className="carburant"></span>Carburant : Plein à rendre plein</li>
											</ul>
											<div id="prix_produit">
												<p className="montant-acompte-selection">dont 100 € d'acompte</p>
												<p className="confirm-tarifs">288.00 €</p>
												</div>
											</div>
											<p className="center mtop10">
												<a href="#_displayinfos__60" id="infos_60" className="mored">
													<span></span>Détails
												</a>
											</p>
										</form>
									</div>
								</div>
								<div className="content">
									<div className="transaction text-justify">
										<div className="contentTitle">
										<h2>Prise en charge</h2>
										</div>
										<div className="paddingp">
										<p><b>Départ :</b> Aéroport de la Réunion Roland-Garros<br /><b> le 04 novembre à 10h00</b></p>
										<p><b>Retour :</b> Aéroport de la Réunion Roland-Garros<br /><b> le 13 novembre à 10h00</b></p>

										</div>
									</div>
								</div>
							</div>
							<div className="col-xs-6">
								<div className="b-contacts__address">
									<div className="transaction text-justify">
										<div className="login">
											<div className="row">
																															
												<p className="pbig">
													<b className="textRempli">Remplissez vos coordonnées et<br/> accédez au paiement de votre <br/>réservation.</b>
													<div className="bouttonDeja"><button className="dejaClient">Déjà client ?</button></div>
												</p>
												
											</div>
											<form id="contactForm" className="contactForm" novalidate className="s-form wow zoomInUp" data-wow-delay="0.5s">
												<input type="text" placeholder="Nom*" value="" name="user-name" id="user-name" />
												<input type="text" placeholder="Prénom*" value="" name="user-email" id="user-email" />
												<input type="text" placeholder="Téléphone*" value="" name="user-phone" id="user-phone" />
												<input type="text" placeholder="Email*" value="" name="user-email" id="user-email" />
												<input type="text" placeholder="Mot de passe*" value="" name="user-phone" id="user-phone" />
												<p>* Champs obligatoires</p>
												<center><button type="submit" className="btn m-btn" id="valider">Valider et payer<span className="fa fa-angle-right"></span></button></center>
												<h3>Protection des données</h3>
												<p>Les informations recueillies font l'objet d'un traitemant informatique pour permettre à
														Rentîles d'exécuter la réservation à distance auprès des loueurs partenaires. Si vous ne 
														remplissez pas les champs obligatoires nous ne serons pas en mesure de vous fournir votre bon de réservation.<br />
														Conformément à la loi "informatique et libertés" du 6 janvier 1978, vous bénéficiez d'un droit d'accès et de
														rectification aux informations qui vous concernent. Si vous souhaitez exercer ce droit et obtenir communication des 
														informations vous concernant, veuillez vous adresser au service client internet via notre <Link to="/contact">formulaire de contact</Link>.
												</p>
											</form>
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


export default Reserver;