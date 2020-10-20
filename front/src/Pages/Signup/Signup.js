import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from '../../axios';
import './Signup.css';

 class Signup extends Component {
    render() {
        return (
            <div>
                <div className="contenu ">
                    <div className="success1" >
                        <h1 className="title">Inscription</h1>  
                        <Formik
                        initialValues={{
                            nom: '',
                            prenom: '',
                            telephone: '',
                            email: '',
                            password: ''
                        }}

                        onSubmit={(values, { resetForm }) => {
               
                            axios.post('/api/users', values).then(response => {
                                if (response.status === 201) {
                                   resetForm();
                                    console.log(values);
                                }
                            })
                        }}
                        >
                            <Form id="contactForm" noValidate className="s-form wow zoomInUp" data-wow-delay="0.5s">
                                <div className="flex">
<<<<<<< HEAD
                                    <Field type="text" placeholder="VOTRE NOM" defaultValue="" name="nom"/> &nbsp;
                                    <Field type="text" placeholder="VOTRE PRENOM" defaultValue="" name="prenom"/>
=======
                                    <input type="text" placeholder="VOTRE NOM" defaultValue="" name="user-name"/> 
                                    <input type="text" placeholder="VOTRE PRENOM" defaultValue="" name="user-name"/>
>>>>>>> 30e3754e9180c60215efd2eeffeff15db1893829
                                </div>
                                <Field type="text" placeholder="TELEPHONE" defaultValue="" name="telephone"/>
                                <Field type="text" placeholder="VOTRE EMAIL" defaultValue="" name="email"/>
                                <Field type="password" placeholder="VOTRE MOT DE PASSE" defaultValue="" name="password"/>
                                
                                <span className="md:text-xl" id="text-color"> *Champs obligatoires</span>
                                    <div className="button">
                                    <button type="submit" className="btn m-btn" id="button1">S'INSCRIRE<span className="fa fa-angle-right"></span></button>
                                    </div>
                                <p className="teny text-justify  md:text-xl   ">
                                    <h2 className="sous">Protection des données</h2> 
                                    Les informations recueillies font l'objet d'un traitemant informatique pour permettre à GP Location d'exécuter la réservation à distance. Si vous ne remplissez pas les champs obligatoires nous ne serons pas en mesure de vous fournir votre bon de réservation.
                                    Conformément à la loi "informatique et libertés" du 6 janvier 1978, vous bénéficiez d'un droit d'accès et de rectification aux informations qui vous concernent. Si vous souhaitez exercer ce droit et obtenir communication des informations vous concernant, veuillez vous adresser au service client internet via notre <Link to="/Contact">formulaire de contact.</Link> 
                                </p>
                            </Form>
                        </Formik>
                    </div>                                                                                                                                                                                                                                      
				</div>
            </div>
        )
    }
}
export default Signup;