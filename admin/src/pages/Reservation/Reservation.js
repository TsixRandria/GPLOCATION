import React, { Component } from 'react'
import axios from '../../axios';
import { Formik, Form, Field } from 'formik';

export class Reservation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lire: false,
            reservations: []
        };
    }

    componentDidMount() {
        // Simple GET request using axios
        this.getAdminReservation();
    }

    getAdminReservation = () => {
        axios.get(`/admin_reservations`)
            .then(res => {
                const reservations = res.data;
                this.setState({ reservations });
                console.log(res);
            })
    }
    
    deleteAdminReservation = (admin_reservation) => {
        axios.delete(`/admin_reservations/${admin_reservation.id}`).then(response => {
            if (response.status === 204) {
                this.getAdminReservation();
            }
        })
    }

    render() {

        return (
            <div>
                <center><h1>Reservation </h1></center>
                <Formik 
                    initialValues={{
                        dateDepart: '',
                        dateRetour: '',
                        lieuDepart: 'Aeroport de Rolland gaross',
                        lieuRetour: 'Aeroport de rolland gaross',
                        heureDepart: '',
                        heureRetour: '',
                        description: ''

                    }}

                    onSubmit={(values, { resetForm }) => {
                        axios.post('/admin_reservations', values).then(response => {
                            if (response.status === 201) {
                                resetForm()
                            }

                        })
                    
                    }} 
                >
                    <Form>
                        <div className="flex flex-wrap mt-10 justify-center mx-10">
                            <div className="bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-600 
                             shadow-md inline-flex items-center">
                                <label>Date de depart:</label>
                            <Field type="date" name="dateDepart" />
                            </div>
                            <div className="bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-600 
                             shadow-md inline-flex items-center">
                                <label>heure de depart:</label>
                            <Field type="time" name="heureDepart" />
                            </div>
                            <div className="bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-600 
                             shadow-md inline-flex items-center">
                                <label>date retour:</label>
                            <Field type="date" name="dateRetour" />
                            </div>
                            <div className="bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-600 
                             shadow-md inline-flex items-center">
                                <labe>heure retour:</labe>
                            <Field type="time" name="heureRetour" />
                            </div>
                            <br/>
                            <label>Description:</label>
                            <div >
                                <Field Component="textarea" name="description" type="text" className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" rows="4"/>
                            </div>
                            <button
                                type="submit"
                                className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 
                                transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                            >Valider</button>
                        </div>
                    </Form>

                </Formik>

                <table className="min-w-full">
                    
                    <tr>
                       
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 
                        text-blue-500 tracking-wider">Date de depart</th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 
                        text-blue-500 tracking-wider">Date de retour</th>
                         <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 
                        text-blue-500 tracking-wider">Description</th>
                    </tr>
                    
                    { this.state.reservations.map(reservation => {
                        return (
                        <tr className="bg-white">
                            
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">{reservation.dateDepart} à {reservation.heureDepart}</td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">{reservation.dateRetour} à {reservation.heureRetour}</td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">{reservation.description}</td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                        <button
                            type="button"
                            className="border border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-2 m-2 transition 
                            duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
                            onClick={() => this.deleteAdminReservation(reservation)} 
                        >
                            delete
                        </button>
                        </td>
                        </tr>
                    )})}
                </table>
            </div>
        )
    }
}

export default Reservation
