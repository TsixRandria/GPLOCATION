import React from 'react';
import axios from '../../../../axios';
import Reservation from '../Reservation/Reservation';

//import component datepicker et timepicker
import Datepicker from './Datepicker';
import Timepicker from './Timepicker';

import './Style.css';


export default class Search extends React.Component {

	// constructor() {
	// 	super();
	// 	this.state = {
	// 		lieu_depart: 'Aéroport Rolland-Garros',
	// 		date_depart: '',
	// 		heure_depart: '',
	// 		lieu_retour: 'Aéroport Rolland-Garros',
	// 		date_retour: '',
	// 		heure_retour: ''
	// 	};

	// 	this.handleLieuDepartChange = this.handleLieuDepartChange.bind(this);
	// 	this.handleDateDepartChange = this.handleDateDepartChange.bind(this);
	// 	this.handleHeureDepartChange = this.handleHeureDepartChange.bind(this);
	// 	this.handleLieuRetourChange = this.handleLieuRetourChange.bind(this);
	// 	this.handleDateRetourChange = this.handleDateRetourChange.bind(this);
	// 	this.handleHeureRetourChange = this.handleHeureRetourChange.bind(this);
	// 	this.handleSubmit = this.handleSubmit.bind(this);
	// }
	state = {
		lieu_depart: '',
	};




	handleLieuDepartChange = event => {
		this.setState({ lieu_depart: event.target.value });
	}

	// handleDateDepartChange(event) {
	// 	this.setState({
	// 		date_depart: event.target.value
	// 	})
	// }

	// handleHeureDepartChange(event) {
	// 	this.setState({ Heure_depart: event.target.value });
	// }
	// handleLieuRetourChange(event) {
	// 	this.setState({ lieu_retour: event.target.value });
	// }

	// handleDateRetourChange(event) {
	// 	this.setState({
	// 		date_depart: event.target.value
	// 	})
	// }
	// handleHeureRetourChange(event) {
	// 	this.setState({ Heure_retour: event.target.value });
	// }

	handleSubmit = event => {
		event.preventDefault();

		const reservation = {
			lieu_depart: this.state.lieu_depart,
			// date_depart: this.state.date_depart,
			// heure_depart: this.state.heure_depart,
			// lieu_retour: this.state.lieu_retour,
			// date_retour: this.state.date_retour,
			// heure_retour: this.state.heure_retour,
		};
		axios.post('/reservations', { reservation }).then(response => {
			console.log(response);
			console.log(response.data);
		})
	};
	// handleSubmit = (values, { resetForm }) => {
	// 		const { action } = this.props;
	// 		if (response.status === 201) {
	// 			resetForm();
	// 			action.getReservation();
	// 		} 
	// 	})
	// }

	//bouton louer et afficher la page reservation
	state = {
		etape: 1
	}

	changerEtape = (newEtape) => {
		this.setState({
			etape: newEtape
		});
	}



	render() {
		const etape = this.state.etape;

		return (
			<>

				<div className="container">

					<div className="b-search__main wow zoomInUp" data-wow-delay="0.3s">
						<h4>Pour louer une voiture à la Réunion, rien de plus simple !<br /> Réservez votre voiture en ligne et pas chère avec GP Location.</h4>
						<form className="b-search__main-form" onSubmit={this.handleSubmit}>
							<div className="row">
								<div className="col-xs-12 col-md-8">
									<div className="m-firstSelects">
										<div className="col-xs-5">
											<p>Lieu de départ</p>
											<select value={this.state.value} name="select1" onChange={this.handleLieuDepartChange}>
												<option selected value="0" >Aéroport Roland-Garros</option>
											</select>
											{/* <span className="fa fa-caret-down"></span> */}

										</div>
										<div className="col-xs-3">
											<p>Date de départ</p>
											<Datepicker />

											{/* <span className="fa fa-caret-down"></span> */}

										</div>
										<div className="col-xs-3">
											<p>heure de départ</p>
											<Timepicker />
											{/* <span className="fa fa-caret-down"></span> */}

										</div>
									</div>
									<div className="m-secondSelects">
										<div className="col-xs-5">
											<p>Lieu de retour</p>
											<select name="select1" >
												<option value="0" >Aéroport Roland-Garros</option>
											</select>
											{/* <span className="fa fa-caret-down"></span> */}

										</div>
										<div className="col-xs-3">
											<p>date de retour</p>
											<Datepicker />



											{/* <span className="fa fa-caret-down"></span> */}

										</div>
										<div className="col-xs-3">
											<p>heure de retour</p>
											<Timepicker />

											{/* <span className="fa fa-caret-down"></span> */}

										</div>
									</div>
								</div>
								<div className="col-md-4 col-xs-12 text-left s-noPadding">
									<div className="b-search__main-form-range">

									</div>
									<div className="b-search__main-form-submit">

										<button onClick={() => this.changerEtape(2)} type="submit" className="btn m-btn">LOUER<span className="fa fa-angle-right"></span></button>
									</div>
								</div>
							</div>
						</form>
					</div>
					{etape === 2 ? (<Reservation />) : null}
				</div>


			</>
		)
	}
}






