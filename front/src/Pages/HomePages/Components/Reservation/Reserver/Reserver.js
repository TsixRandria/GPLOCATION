import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import PaimentEtape1 from './Paiment/PaimentEtape1';
import './Reserver.css';
import DetailReserver from './DetailReserver';
import axios from '../../../../../axios';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import ErrorField from '../ErrorField';

const ClientRegistrationSchema = Yup.object().shape({
    nom: Yup.string()
		.required('le nom ne doit pas être vide')
		.min(4, 'Nom invalide')
		.matches(/([a-z-A-Z])/, 'Le nom ne doit contenir que des lettres'),
	prenom: Yup.string()
		.required('le Prenom ne doit pas être vide')
		.min(4, 'Prenom invalide')
		.matches(/[a-z]/, 'Le prenom ne doit contenir que des lettres'),
	telephone: Yup.string()
		.required('le Numero de telephone ne doit pas être vide')
		.min(8, 'Numero telephone incomplet')
		.max(15, 'Numero inconnue')
		.matches(/([0-9])/, 'Le numero de telephone ne doit contenir que des chiffres'),
	email: Yup.string()
		.email('Email invalide,merci de vouloire completé')
		.required('l \' email ne doit pas être vide')

			
});

const ClientSession = Yup.object().shape({
	email: Yup.string()
		.email('Email invalide,merci de vouloire completé')
		.required('l \' email ne doit pas être vide'),
	password_digest: Yup.string()
		.required('le mot de passe ne doit pas laisser à vide')
});


function Reserver() {

    const [modalShow, setModalShow] = React.useState(false);
    const [etat, setEtat] = useState(1);

    const voiture = axios.get('http://localhost:4000/voitures')                                                                                                                                                                                                                                                                              
        .then(response => console.log(response))
        .catch(error => console.error(error));
    
    return (
        <div>
            <div className="b-breadCumbs s-shadow wow " >
                    <div className="container">
                        <a href="/" className="b-breadCumbs__page">Accueil</a><span className="fa fa-angle-right"></span><a href="/Reserver" className="b-breadCumbs__page m-active">Finalisation du réservation</a>
                    </div>
                    <h1 className="grandTitre">Finalisation de ma réservation</h1>
                </div>
                <section className="b-contacts s-shadow">
                    <div className="container">
                   
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="b-contacts__form">
                                <div className="login">
                                        <form id="contactForm" noValidate className="s-form wow zoomInUp" data-wow-delay="0.5s">
                                            <div className="b-contacts__address-hours">
                                            <p className="conf_categ">{voiture.marque}</p>
                                            <div className="bouttonModif"><Link to="/" className="modifier">Modifier</Link></div>
                                            <img className="img-responsive center-block" src="media/blog/nissanBlogTwo.jpg" alt="nissan" />
                                            <ul className="listeReserve">
                                                <li className="prise"><span></span><b>Prise en charge à l'aéroport</b></li>
                                                <li className="prise"><span className="carburant"></span>Carburant : Plein à rendre plein</li>
                                            </ul>
                                            <div id="prix_produit">
                                                <p className="montant-acompte-selection">dont 100 € d'acompte</p>
                                                <p className="confirm-tarifs">288.00 €</p>
                                                </div>
                                            </div>
                                            <p className="center mtop10">
                                                
                                                <Button variant="primary" onClick={() => setModalShow(true)} className="mored">
                                                Détails
                                                </Button>

                                                <DetailReserver
                                                    show={modalShow}
                                                    onHide={() => setModalShow(false)}
                                                />
                                            </p>
                                        </form>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="transaction text-justify">
                                        <div className="contentTitle">
                                        <h2>Prise en charge</h2>
                                        </div>
                                        <div className="paddingp">
                                        <p><b>Départ :</b> Aéroport de la Réunion Roland-Garros<br /><b> le 04 novembre à 10h00</b></p>
                                        <p><b>Retour :</b> Aéroport de la Réunion Roland-Garros<br /><b> le 13 novembre à 10h00</b></p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            { etat === 1 ? (
                            <div className="col-xs-6">
                                <div className="b-contacts__address">
                                    <div className="transaction text-justify">
                                        <div className="login">
                                            <div className="row">
                                                                                                                            
                                                <p className="pbig">
                                                    <b className="textRempli">Remplissez vos coordonnées et<br/> accédez au paiement de votre <br/>réservation.</b>
                                                    <div className="bouttonDeja"><button onClick={() => setEtat(2)} className="dejaClient">Déjà client ?</button></div>
                                                </p>
                                                
                                            </div>
                                            <Formik
                                            initialValues={{
                                                nom: '',
                                                prenom: '',
                                                email: '',
                                                telephone: '',
                                                password_digest: ''
                                                
                                            }}
                                            validationSchema={ClientRegistrationSchema}
                                            onSubmit={(values, { resetForm }) => {
                                                console.log("Test");
                                                axios.post('/clients', values).then(response => {
                                                    if (response.status === 200) {
                                                        resetForm();
                                                        console.log(values);
                                                        setEtat(3)
                                                        
                                                    } else if (response.status === 202) {
                                                        console.log(response);
                                                    } 
                                                })
                                            }}
                                            >
                                            {({ errors, touched, handleSubmit }) => (
                                                <Form id="contactForm" className="contactForm" noValidate className="s-form wow zoomInUp" onSubmit={handleSubmit}>
                                                    <div>
                                                        <Field type="text" placeholder="Nom*" name="nom"  />
                                                        <ErrorField errors={errors} touched={touched} row="nom"/>
                                                    </div>
                                                    <div>
                                                        <Field type="text" placeholder="Prénom*" name="prenom"  />
                                                        <ErrorField errors={errors} touched={touched} row="prenom"/>
                                                    </div>
                                                    <div>
                                                        <Field type="text" placeholder="Téléphone*" name="telephone" />
                                                        <ErrorField errors={errors} touched={touched} row="telephone"/>
                                                    </div>
                                                    <div>
                                                        <Field type="text" placeholder="Email*" name="email" />
                                                        <ErrorField errors={errors} touched={touched} row="email"/>
                                                    </div>
                                                    <div>
                                                        <Field type="password" placeholder="Mot de passe*" name="password_digest" />
                                                        <ErrorField errors={errors} touched={touched} row="pasword_digest"/>
                                                    </div>
                                                    <p>* Champs obligatoires</p>
                                                    <center><button type="submit" className="btn m-btn" id="valider">Valider et payer<span className="fa fa-angle-right"></span></button></center>
                                                </Form>)}
                                            </Formik>
                                            <h3 >Protection des données</h3>
                                            <p className="petitp">Les informations recueillies font l'objet d'un traitemant informatique pour permettre à Rentîles 
                                            d'exécuter la réservation à distance auprès des loueurs partenaires. Si vous ne remplissez pas les champs obligatoires 
                                            nous ne serons pas en mesure de vous fournir votre bon de réservation.<br />Conformément à la loi "informatique et libertés" 
                                            du 6 janvier 1978, vous bénéficiez d'un droit d'accès et de rectification aux informations qui vous concernent. Si vous souhaitez 
                                            exercer ce droit et obtenir communication des informations vous concernant, veuillez vous adresser au service client internet via 
                                            notre <a href="/Contact">formulaire de contact</a>.</p>
                                        </div>
                    
                                    </div>
                                </div>
                            </div>
                            ) : null } 
                             { etat === 2 ? (
                                <div className="col-xs-6">
                                    <div className="b-contacts__address">
                                        <div className="transaction text-justify">
                                            <div className="login">
                                                <div className="row">
                                                                                                                                
                                                    <p className="pbig">
                                                        
                                                        <b className="textRempli">Connectez-vous à votre compte et <br/> accédez au paiement de votre réservation.</b>
                                                        <div className="bouttonDeja"><button onClick={() => setEtat(1)} className="dejaClient">Nouveau client ?</button></div>
                                                    </p>
                                                    
                                                </div>
                                                <Formik
                                                initialValues={{
                                                    email: '',
                                                    password_digest: ''
                                                }}
                                                validationSchema={ClientSession}
                                                onSubmit={(values, { resetForm }) => {
                                                    axios.post('/client_login', values).then(response => {
                                                        if (response.status === 200) {
                                                            resetForm();
                                                            console.log(values);
                                                            setEtat(3)
                                                        }
                
                                                    })
                                                
                                                }}
                                                
                                                >
                                                {({ errors, touched, handleSubmit }) => (
                                                    <Form id="contactForm" className="contactForm" noValidate className="s-form wow zoomInUp" onSubmit={handleSubmit}>
                                                        <div>
                                                            <Field type="text" placeholder="Email*" name="email" />
                                                            <ErrorField errors={errors} touched={touched} row="email"/>
                                                        </div>
                                                        <div>
                                                            <Field type="password" placeholder="Mot de passe*" name="password_digest" />
                                                            <ErrorField errors={errors} touched={touched} row="password_digest"/>
                                                        </div>
                                                        <a>Mot de passe oublier</a>
                                                        <center><button type="submit" className="btn m-btn" id="valider">Valider et payer<span className="fa fa-angle-right"></span></button></center>
                                                    </Form>)}
                                                </Formik>
                                                <h3 >Protection des données</h3>
                                                <p className="petitp">Les informations recueillies font l'objet d'un traitemant 
                                                informatique pour permettre à Rentîles d'exécuter la réservation à distance auprès des loueurs partenaires. 
                                                Si vous ne remplissez pas les champs obligatoires nous ne serons pas en mesure de vous fournir votre bon de réservation.<br />Conformément 
                                                à la loi "informatique et libertés" du 6 janvier 1978, vous bénéficiez d'un droit d'accès et de rectification aux informations 
                                                qui vous concernent. Si vous souhaitez exercer ce droit et obtenir communication des informations vous concernant, veuillez vous 
                                                adresser au service client internet via notre <a href="/Contact">formulaire de contact</a>.</p>
                                            </div>
                        
                                        </div>
                                    </div>
                                </div>
                            ) : null } 
                            { etat === 3 ? (
                                <PaimentEtape1 />
                            ) : null } 
                        </div>
                    </div>
                </section>
        </div>
    )
}

export default Reserver;
