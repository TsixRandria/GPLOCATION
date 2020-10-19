import React,{Component} from 'react';
import './Mentions.css';

class Mentions extends React.Component{
	render(){
		return(
			<>
				<center>
					<h1 data-wow-delay="0.2s">Mentions légales</h1>
				</center>
				
				<div className="col-sm-11 col-xs-10">
					<div className="b-blog__posts-one-body">
						<header className="b-blog__posts-one-body-head wow zoomInUp" data-wow-delay="0.5s">
							<h2 className="s-titleDet">ÉDITEUR :</h2>
						</header>
					</div>
				</div>
				<section className="b-best">
					<div className="container">
						<div className="row">
							<div className="col-sm-6 col-xs-12">
								<div className="b-compare__block wow zoomInUp" data-wow-delay="0.3s">
									<div className="b-compare__block-title s-whiteShadow">
										<h3 className="s-titleDet">SARL GP Location, Siret : 482 868 478 000 17</h3>
										<a className="j-more" href="/"><span className="fa fa-angle-left"></span></a>
									</div>
									<br />
									<div className="b-compare__block-title s-whiteShadow">
										<h3 className="s-titleDet">SARL au capital de 20 000€</h3>
										<a className="j-more" href="/"><span className="fa fa-angle-left"></span></a>
									</div>
									<br/>
									<div className="b-compare__block-title s-whiteShadow">
										<h3 className="s-titleDet">Adresse : 34 Rue de la Plantation - 97438 Sainte-Marie</h3>
										<a className="j-more" href="/"><span className="fa fa-angle-left"></span></a>
									</div>
									<br />
									<div className="b-compare__block-title s-whiteShadow">
										<h3 className="s-titleDet">Téléphone : 0692 370 380</h3>
										<a className="j-more" href="/"><span className="fa fa-angle-left"></span></a>
									</div>
									<br />
									<div className="b-compare__block-title s-whiteShadow">
										<h3 className="s-titleDet">Adresse email : infos@gplocation.fr</h3>
										<a className="j-more" href="/"><span className="fa fa-angle-left"></span></a>
									</div>
									<br />
									<div className="b-compare__block-title s-whiteShadow">
										<h3 className="s-titleDet">Directeur de publication : Vitry Jean François</h3>
										<a className="j-more" href="/"><span className="fa fa-angle-left"></span></a>
									</div>
									<br />

								</div>
							</div>
							<div className="col-sm-6 col-xs-12">
								<img className="img-responsive center-block wow zoomInUp" data-wow-delay="0.5s" alt="best" src="media/about/mention.jpg" width ="586" height ="392.62"/>
							</div>
							<br />
							<div className="col-sm-12 col-xs-12">
								<div className="b-compare__block wow zoomInUp" data-wow-delay="0.3s">
									<div className="b-compare__block-title s-whiteShadow">
										<h3 className="s-titleDet">Conception / Réalisation du site :</h3>
										<a className="j-more" href="/"><span className="fa fa-angle-left"></span></a>
									</div>
									<br />
									<div className="b-compare__block-title s-whiteShadow">
										<h3 className="s-titleDet">Hébergement :</h3>
										<a className="j-more" href="/"><span className="fa fa-angle-left"></span></a>
									</div>
									<br />
									<div className="b-compare__block-title s-whiteShadow">
										<h3 className="s-titleDet">Siège social :</h3>
										<a className="j-more" href="/"><span className="fa fa-angle-left"></span></a>
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

export default Mentions;