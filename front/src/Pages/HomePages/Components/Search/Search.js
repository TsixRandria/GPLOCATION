import React, { useState } from 'react';
import axios from '../../../../axios';
import ErrorField from './ErrorField';
import * as Yup from 'yup'; 
import './Style.css';
import { Field, Form, Formik, FormikProps } from 'formik';
import Reservation from '../Reservation/Reservation';



const ReservationSchema = Yup.object().shape({
    dateDepart: Yup.string()
        .required('vous devez indiquer votre date de départ'),
    dateRetour: Yup.string()
		.required('vous devez indiquer votre date de retour'),
	heureDepart: Yup.string()
		.required('information important'),
	heureRetour: Yup.string()
		.required('information important'),

});


export default class Search extends React.Component {
	state = {
		etape: 1,
		voitures: [],
		date_reservation: {}
	}

	changerEtape = (newEtape) => {
		this.setState({
			etape: newEtape
		});
	}
	
	
	render() {
		const { etape, date_reservation } = this.state;
		return (
			<>

				<div className="container">

					<div className="b-search__main wow zoomInUp" data-wow-delay="0.3s">
					
						<h4>Pour louer une voiture à la Réunion, rien de plus simple !<br /> Réservez votre voiture en ligne et pas chère avec GP Location.</h4>
						<Formik 
						initialValues={{
							dateDepart: '',
							dateRetour: '',
							heureDepart: '',
							heureRetour: '',
							lieuDepart: 'aeroport de rolland garos',
							lieuRetour: 'aeroport de rolland garos'
						}}
						validationSchema={ReservationSchema}
						onSubmit={(values, { resetForm }) => {
							axios.post('/reservations', values).then(response => {
								if (response.status === 201) {
									this.setState({ etape: 2})
									
									this.setState({
										date_reservation: values
									});

								} else if (response.status === 204) {
									console.log(response.data);
								}
							})
						}}
						>
							{({ errors, touched }) => (
							<Form className="b-search__main-form">
								<div className="row">
									<div className="col-xs-12 col-md-8">
										<div className="m-firstSelects">
											<div className="col-xs-5">
												<p>Lieu de départ</p>
												<select >
													<option selected value="0" >Aéroport Roland-Garros</option>
												</select>
												

											</div>
											<div class="m-secondSelects">
												<div className="col-xs-4">
													<p>Date de départ</p>
													<Field type="date" className="select_field" name="dateDepart" defaultValue={Date.now}/>
													<ErrorField errors={errors} touched={touched} row="dateDepart"/>
												</div>
											</div>
											<div className="col-xs-3">
												<p>heure de départ</p>
												<Field type="time"  className="select_field" name="heureDepart" />
												<ErrorField errors={errors} touched={touched} row="heureDepart"/>
											</div>
										</div>
										<div className="m-secondSelects">
											<div className="col-xs-5">
												<p>Lieu de retour</p>
												<select name="select1" >
													<option value="0" >Aéroport Roland-Garros</option>
												</select>
											
											</div>
											<div className="col-xs-4">
												<p>date de retour</p>
												<Field type="date"  className="select_field"  name="dateRetour" />
												<ErrorField errors={errors} touched={touched} row="dateRetour"/>
											</div>
											<div className="col-xs-3">
												<p>heure de retour</p>
												<Field type="time"  className="select_field" name="heureRetour"/>
												<ErrorField errors={errors} touched={touched} row="heureRetour"/>
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
							</Form>)}
						</Formik>
					
					</div>
					{etape === 2 ? (<Reservation date_reservation={date_reservation} />) : null}
				</div>


			</>
		);
	}
}






