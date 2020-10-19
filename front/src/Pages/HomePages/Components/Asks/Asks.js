import React from 'react';
import './Style.css';


class Asks extends React.Component {
	render() {
		return (
			<>
				<section className="b-asks">
					<div className="container">
						<div className="row">
							<div className="col-md-6 col-sm-10 col-sm-offset-1 col-md-offset-0 col-xs-12">
								<div className="b-asks__first wow zoomInLeft" data-wow-delay="0.3s">
									<div className="b-asks__first-circle">
										<span className="fa fa-search"></span>
									</div>
									<div className="b-asks__first-info">
										<h2>ARE YOU LOOKING FOR A CAR?</h2>
										<p>Search Our Inventory With Thousands Of Cars  And More 
											Cars Are Adding On Daily Basis</p>
									</div>
									<div className="b-asks__first-arrow">
										<a href="listings.html"><span className="fa fa-angle-right"></span></a>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-sm-10 col-sm-offset-1 col-xs-12 col-md-offset-0">
								<div className="b-asks__first m-second wow zoomInRight" data-wow-delay="0.3s">
									<div className="b-asks__first-circle">
										<span className="fa fa-usd"></span>
									</div>
									<div className="b-asks__first-info">
										<h2>DO YOU WANT TO SELL A CAR?</h2>
										<p>Search Our Inventory With Thousands Of Cars  And More 
											Cars Are Adding On Daily Basis</p>
									</div>
									<div className="b-asks__first-arrow">
										<a href="listings.html"><span className="fa fa-angle-right"></span></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="b-partners">
					<div className="container">
						<h1 className="s-title wow zoomInUp" data-wow-delay="0.3s">OUR PARTNERS</h1>
						<div className="">
							
							<div className="b-brands__brand wow zoomInUp" data-wow-delay="0.3s">
								<img src="media/brands/decosinto.png" alt="brand" />
							</div>
							<div className="b-brands__brand wow zoomInUp" data-wow-delay="0.3s">
								<img src="media/brands/hospice.png" alt="brand" />
							</div>
							<div className="b-brands__brand wow zoomInRight" data-wow-delay="0.3s">
								<img src="media/brands/aristeia.png" alt="brand" />
							</div>
						</div>
					</div>
				</section>

			</>
		)
	}
}

export default Asks;