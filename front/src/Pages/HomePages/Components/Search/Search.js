import React from 'react';
import axios from '../../../../axios';
import Reservation from '../Reservation/Reservation';
import { Field } from 'redux-form';
import moment from 'moment';
import DatePicker from 'react-datepicker';


//import component datepicker et timepicker
import Datepicker from './Datepicker';
import Timepicker from './Timepicker';

import './Style.css';


export default class Search extends React.Component {
	constructor(propos) {
		super(propos)
	}
	
	render() {
	
			const { handleSubmit } = this.props;
	 
			const renderDatePicker = ({input}) => (
			  <div>
					<DatePicker {...input} dateForm="MM/DD/YYYY" selected={input.value ? moment(input.value, 'MM/DD/YYYY') : null} />
			  </div>
			);
	 
		return (
			<>

				<div className="container">

					<div className="b-search__main wow zoomInUp" data-wow-delay="0.3s">
					
						<h4>Pour louer une voiture à la Réunion, rien de plus simple !<br /> Réservez votre voiture en ligne et pas chère avec GP Location.</h4>
						<form className="b-search__main-form">
							<div className="row">
								<div className="col-xs-12 col-md-8">
									<div className="m-firstSelects">
										<div className="col-xs-5">
											<p>Lieu de départ</p>
											<select >
												<option selected value="0" >Aéroport Roland-Garros</option>
											</select>
											

										</div>
										<div className="col-xs-3">
											<p>Date de départ</p>
											<Field name="date" component={renderDatePicker} />
										</div>
										<div className="col-xs-3">
											<p>heure de départ</p>
											<Timepicker name="heure_de_depart" />
										
										</div>
									</div>
									<div className="m-secondSelects">
										<div className="col-xs-5">
											<p>Lieu de retour</p>
											<select name="select1" >
												<option value="0" >Aéroport Roland-Garros</option>
											</select>
										
										</div>
										<div className="col-xs-3">
											<p>date de retour</p>
											<Datepicker name="date_de_retour" />

										</div>
										<div className="col-xs-3">
											<p>heure de retour</p>
											<Timepicker name="heure_de_retour" />

										</div>
									</div>
								</div>
								<div className="col-md-4 col-xs-12 text-left s-noPadding">
									<div className="b-search__main-form-range">

									</div>
									<div className="b-search__main-form-submit">

										<button type="submit" className="btn m-btn">LOUER<span className="fa fa-angle-right"></span></button>
									</div>
								</div>
							</div>
						</form>
				
					</div>

				</div>


			</>
		);
	}
}






