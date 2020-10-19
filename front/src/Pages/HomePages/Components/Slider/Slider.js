import React from 'react';
import './Style.css';



class Slider extends React.Component {
	render() {
		return (
			<>
				<section className="b-slider" > 
					<div id="carousel" className="slide carousel carousel-fade">
						<div className="carousel-inner">
							<div className="item active" id="noir">
							<img src="media/main-slider/background-blog.jpg" alt="sliderImg" />
								<div className="container">
									<div className="carousel-caption b-slider__info">
										<h3>GP Location</h3>
										<h2>Location de Voiture à la Réunion</h2>
										{/* <p>Depuis <span>10 ans</span></p> */}
									</div>
								</div>
							</div>
							<div className="item">
								<img src="media/main-slider/blog1.jpg" alt="sliderImg" />
								<div className="container">
									<div className="carousel-caption b-slider__info">
										<h3>GP Location</h3>
										<h2>Location de voiture à </h2>
										<p>Sainte-Marie </p>
										<a className="btn m-btn" href="/Saint">Plus d'infos<span className="fa fa-angle-right"></span></a>
									</div>
								</div>
							</div>
							<div className="item">
								<img src="media/main-slider/blog2.jpg" alt="sliderImg" />
								<div className="container">
									<div className="carousel-caption b-slider__info">
									<h3>GP Location</h3>
										<h2>Location de voiture à </h2>
										<p>l'Aéroport de la Réunion Roland-Garros</p>
										{/* <p>Depuis  <span>10 ans</span></p> */}
										<a className="btn m-btn" href="/Aeroport">Plus d'infos<span className="fa fa-angle-right"></span></a>
									</div>
								</div>
							</div>
						</div>
						<a className="carousel-control right" href="#carousel" data-slide="next">
							<span className="fa fa-angle-right m-control-right"></span>
						</a>
						<a className="carousel-control left" href="#carousel" data-slide="prev">
							<span className="fa fa-angle-left m-control-left"></span>
						</a>
					</div>
				</section>

			</>
		)
	}
}


export default Slider;