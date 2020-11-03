import React from 'react';
import axios from '../../../../axios';
import Reservation from '../Reservation/Reservation';

//import date picker
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";







class Search extends React.Component {

	constructor() {
		super();
		this.state = {
			lieu_depart: '',
			date_depart: new Date(),
			heure_depart: '',
			lieu_retour: '',
			date_retour: new Date(),
			heure_retour: ''
		};

		this.handleLieuDepartChange = this.handleLieuDepartChange.bind(this);
		this.handleDateDepartChange = this.handleDateDepartChange.bind(this);
		this.handleHeureDepartChange = this.handleHeureDepartChange.bind(this);
		this.handleLieuRetourChange = this.handleLieuRetourChange.bind(this);
		this.handleDateRetourChange = this.handleDateRetourChange.bind(this);
		this.handleHeureRetourChange = this.handleHeureRetourChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}




	handleLieuDepartChange(event) {
		this.setState({ lieu_depart: event.target.value });
	}

	handleDateDepartChange(date) {
		this.setState({
			date_depart: date
		})
	}

	handleHeureDepartChange(event) {
		this.setState({ Heure_depart: event.target.value });
	}
	handleLieuRetourChange(event) {
		this.setState({ lieu_retour: event.target.value });
	}

	handleDateRetourChange(date) {
		this.setState({
			date_retour: date
		})
	}
	handleHeureRetourChange(event) {
		this.setState({ Heure_retour: event.target.value });
	}


	handleSubmit = (values, { resetForm }) => {
		axios.post('/reservations', values).then(response => {
			const { action } = this.props;
			if (response.status === 201) {
				resetForm();
				action.getUtilisateur();
			}
		})
	}

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
						<h4>Pour louer une voiture à la Réunion, rien de plus simple !<br /> Réservez votre voiture en ligne et pas chère avec GP Reservation.</h4>
						<form action="listingsTwo.html" method="POST" className="b-search__main-form">
							<div className="row">
								<div className="col-xs-12 col-md-8">
									<div className="m-firstSelects">
										<div className="col-xs-5">
											<p>Lieu de départ</p>
											<select name="select1">
												<option selected value="0" >Aéroport Roland-Garros</option>
											</select>
											{/* <span className="fa fa-caret-down"></span> */}

										</div>
										<div className="col-xs-3">
											<p>Date de départ</p>
											<select name="select4">
												<option value="0" selected="selected">14/12/2020</option>
												<option value="1">15/12/2020</option>
												<option value="2">16/12/2020</option>
												<option value="3">17/12/2020</option>
												<option value="4">18/12/2020</option>
												<option value="5">19/12/2020</option>
											</select>
											{/* <span className="fa fa-caret-down"></span> */}

										</div>
										<div className="col-xs-3">
											<p>heure de départ</p>
											<select name="select3">
												<option value="05:30" >05:30</option>
												<option value="06:00" >06:00</option>
												<option value="06:30" >06:30</option>
												<option value="07:00" >07:00</option>
												<option value="07:30" >07:30</option>
												<option value="08:00" >08:00</option>
												<option value="08:30" >08:30</option>
												<option value="09:00" >09:00</option>
												<option value="09:30" >09:30</option>
												<option value="10:00" >10:00</option>
												<option value="10:30" >10:30</option>
												<option value="11:00" >11:00</option>
												<option value="11:30" >11:30</option>
												<option value="12:00" >12:00</option>
												<option value="12:30" >12:30</option>
												<option value="13:00" >13:00</option>
												<option value="13:30" >13:30</option>
												<option value="14:00" >14:00</option>
												<option value="14:30" >14:30</option>
												<option value="15:00" >15:00</option>
												<option value="15:30" >15:30</option>
												<option value="16:00" >16:00</option>
												<option value="16:30" >16:30</option>
												<option value="17:00" >17:00</option>
												<option value="17:30" >17:30</option>
												<option value="18:00" >18:00</option>
												<option value="18:30" >18:30</option>
												<option value="19:00" >19:00</option>
												<option value="19:30" >19:30</option>
												<option value="20:00" >20:00</option>
												<option value="20:30" >20:30</option>
												<option value="21:00" >21:00</option>
												<option value="21:30" >21:30</option>
												<option value="22:00" >22:00</option>
												<option value="22:30" >22:30</option>
												<option value="23:00" >23:00</option>
											</select>
											{/* <span className="fa fa-caret-down"></span> */}

										</div>
									</div>
									<div className="m-secondSelects">
										<div className="col-xs-5">
											<p>Lieu de retour</p>
											<select name="select1">
												<option value="0" >Aéroport Roland-Garros</option>
											</select>
											{/* <span className="fa fa-caret-down"></span> */}

										</div>
										<div className="col-xs-3">
											<p>date de retour</p>
											<select name="select4">
												<option value="0" selected="selected">14/12/2020</option>
												<option value="1">15/12/2020</option>
												<option value="2">16/12/2020</option>
												<option value="3">17/12/2020</option>
												<option value="4">18/12/2020</option>
												<option value="5">19/12/2020</option>
											</select>
											{/* <span className="fa fa-caret-down"></span> */}

										</div>
										<div className="col-xs-3">
											<p>heure de retour</p>
											<select name="select5">
												<option value="06:00" >06:00</option>
												<option value="06:30" >06:30</option>
												<option value="07:00" >07:00</option>
												<option value="07:30" >07:30</option>
												<option value="08:00" >08:00</option>
												<option value="08:30" >08:30</option>
												<option value="09:00" >09:00</option>
												<option value="09:30" >09:30</option>
												<option value="10:00" >10:00</option>
												<option value="10:30" >10:30</option>
												<option value="11:00" >11:00</option>
												<option value="11:30" >11:30</option>
												<option value="12:00" >12:00</option>
												<option value="12:30" >12:30</option>
												<option value="13:00" >13:00</option>
												<option value="13:30" >13:30</option>
												<option value="14:00" >14:00</option>
												<option value="14:30" >14:30</option>
												<option value="15:00" >15:00</option>
												<option value="15:30" >15:30</option>
												<option value="16:00" >16:00</option>
												<option value="16:30" >16:30</option>
												<option value="17:00" >17:00</option>
												<option value="17:30" >17:30</option>
												<option value="18:00" >18:00</option>
												<option value="18:30" >18:30</option>
												<option value="19:00" >19:00</option>
												<option value="19:30" >19:30</option>
												<option value="20:00" >20:00</option>
												<option value="20:30" >20:30</option>
												<option value="21:00" >21:00</option>
												<option value="21:30" >21:30</option>
												<option value="22:00" >22:00</option>
												<option value="22:30" >22:30</option>
												<option value="23:00" >23:00</option>
											</select>
											{/* <span className="fa fa-caret-down"></span> */}

										</div>
									</div>
								</div>
								<div className="col-md-4 col-xs-12 text-left s-noPadding">
									<div className="b-search__main-form-range">

									</div>
									<div className="b-search__main-form-submit">

										<button onClick={() => this.changerEtape(2)} type="button" className="btn m-btn">LOUER<span className="fa fa-angle-right"></span></button>
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

export default Search;