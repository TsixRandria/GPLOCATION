import React from 'react';

class Welcome extends React.Component {
	render() {
		return (
			<>
				<section className="b-welcome">
					<div className="container">
						<div className="row">
							<div className="b-welcome__services">
								<div className="col-md-3 col-xs-12">
									<div className="row">
										<div className="col-xs-12 m-padding">
											<div className="b-welcome__services-auto wow zoomInLeft" data-wow-delay="0.3s">
												<div className="b-welcome__services-img m-auto">
													<span className="fa fa-cab"></span>
												</div>
												<h3>Support</h3>
											</div>
										</div>
										<div className="col-xs-12 text-right visible-md visible-lg">
											<div className="m-circle wow slideInRight" data-wow-delay="0.3s">
												<span className="b-welcome__services-circle"></span>
											</div>
										</div>
										<div className="col-xs-12 m-padding">
											<div className="b-welcome__services-buying wow zoomInLeft" data-wow-delay="0.3s">
												<div className="b-welcome__services-img m-buying">
													<span className="fa fa-book"></span>
												</div>
												<h3>guide</h3>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xs-12 col-md-6">
								<div className="b-welcome__text wow zoomInUp" data-wow-delay="0.3s">
									<h2>Guides ultimes</h2>
									<h3>Bienvenue sur GP Location </h3>
									<p>Vous arrivez à la Réunion via le port ou l'aéroport ? Située à proximité, notre agence vous propose le service de location de voiture tout en évitant les files d'attente.</p>
									<p>
									<h4>Découvrir l'île de la Réunion à bord d'une voiture de location</h4>
										Pour découvrir l'île de la Réunion, une voiture est indispensable. En effet, le réseau de transport public étant limité, avec une voiture de location vous serez libre dans vos déplacements.</p>
									<ul>
										<li><span className="fa fa-check"></span>Prise en charge à l'aéroport ou au port avec votre véhicule </li>
										<li><span className="fa fa-check"></span>Kilométrage illimité, assurances incluses</li>
										<li><span className="fa fa-check"></span>Assistance 7j/7, 24h/24</li>
										<li><span className="fa fa-check"></span>Large choix de véhicules récents</li>
										<li><span className="fa fa-check"></span>Ouvert 7j/7 y compris jours fériés</li>
									</ul>
								</div>
							</div>
							<div className="b-welcome__services">
								<div className="col-md-3 col-xs-12">
									<div className="row">
										<div className="col-xs-12 m-padding">
											<div className="b-welcome__services-trade wow zoomInRight" data-wow-delay="0.3s">
												<div className="b-welcome__services-img m-trade">
													<span className="fa fa-male"></span>
												</div>
												<h3>Services</h3>
											</div>
										</div>
										<div className="col-xs-12 text-left visible-md visible-lg">
											<div className="m-circle pull-right wow slideInLeft" data-wow-delay="0.3s">
												<span className="b-welcome__services-circle m-left"></span>
											</div>
										</div>
										<div className="col-xs-12 m-padding">
											<div className="b-welcome__services-support wow zoomInRight" data-wow-delay="0.3s">
												<div className="b-welcome__services-img m-support">
												<span className="fa fa-home"></span>
												</div>
												<h3>A propos</h3>
											</div>
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

export default Welcome;