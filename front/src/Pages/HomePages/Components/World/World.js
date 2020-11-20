import React from 'react';
import axios from '../../../../axios';

class World extends React.Component {
	state = {
		voitures: [],
		// options: []
	}

	componentDidMount() {
		this.getVoiture();
		// this.getOption();
	}

	getVoiture = () => {
		axios.get('/voitures').then(response => {
			if (response.status === 200) {
				this.setState({
					voitures: response.data

				})
				// console.log(response.data)
			}
		})
	}


	// async function getOption() {
	// 	try {
	// 	  const response = await this.getVoiture();
	// 	  console.log(response);
	// 	} catch (error) {
	// 	  console.error(error);
	// 	}
	// }
	  
	  
// 	getOption = () => {
// 		// const params = new Promise((resolve, reject) => {
// 		// 	resolve(this.state.voitures);
// 		// });
// 		// params.then((value) => {
// 		// 	// console.log(value);
// 		// })


// 		// async function asyncFunc() {
// 		// 	// fetch data from a url endpoint
// 		// 	const data = await this.getVoiture();
// 		// 	return data;
// 		// 	console.log(data)


// 		axios.get(`/categories/${params.id}/options`).then(response => {
// 			if (response.status === 200) {
// 				this.setState({
// 					options: response.data
// 				})

// 				console.log("tafiditra")
// 			}
// 		})
// 	}
// }


render() {
	const { voitures } = this.state;
	return (
		<>
			<section id="voitures" className="b-world">
				<section class="b-slider">
					<div id="carousel" class="slide carousel carousel-fade">
						<div class="carousel-inner">
							<div class="item active">
								<div className="container">
									<div className="row">
										{voitures.map(voiture =>
											(<div className="col-sm-4 col-xs-12">
												<div className="b-world__item wow zoomInUp" data-wow-delay="0.3s">
													<img className="img-responsive" src={`http://localhost:4000/${voiture.image.url}`} />
													<div className="b-world__item-val">
														<span className="b-world__item-val-title">{voiture.marque}</span>
													</div>
													<h2>{voiture.model}</h2>
													<p>
														<ul>
															<li>{voiture.places} places</li>
															<li>Boîte {voiture.vitesse}</li>
															<li>{voiture.mode}</li>
															<li>Climatisation : {voiture.climatisation}</li>
															<li>{voiture.category_id}</li>
														</ul>
													</p>
												</div>
											</div>)
										)
										}


									</div>
								</div>
							</div>
						</div>

					</div>
				</section>
			</section>

		</>
	)
}
}


export default World;