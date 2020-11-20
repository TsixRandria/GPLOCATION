import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Detail from './Detail/Detail';
import Reserver from './Reserver/Reserver';
import Options from './Options';
import { MdRowing } from "react-icons/cg";
import './Reservation.css';
import axios from '../../../../axios';


class Reservation extends Component {
    state = {
        etape: 1,
        voitures: [],
        categories: [],
        // options: []
    }

    changerEtape = (newEtape) => {
        this.setState({
            etape: newEtape
        });
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


    render() {
        const etape = this.state.etape;
        const { voitures } = this.state;
        const { date_reservation } = this.props;
        return (
            <div>
                {voitures.map(voiture =>
                    (<div>
                        <section className="b-items s-shadow" id="padingReserver">
                            <div className="container">
                                <div className="row"><div><span className="spinner"></span></div>
                                    <div className="col-lg-12 col-sm-12 col-xs-12">
                                        <ul className="carac-prod">
                                            <li className="imagePading"><span className="imagePading"><img src="media/blog/1.png" alt="nissan" /></span>{voiture.mode}</li>
                                            <li className="imagePading"><sapn className="imagePading"><img src="media/blog/2.jpg" alt="nissan" /></sapn>{voiture.vitesse}</li>
                                            <li className="imagePading"><span className="imagePading"><img src="media/blog/3.jpg" alt="nissan" /></span>Climatisation: {voiture.climatisation}</li>
                                            <li className="imagePading"><span className="imagePading"><img src="media/blog/4.jpg" alt="nissan" /></span>{voiture.places} places</li>
                                            <li className="imagePading"><span className="imagePading"><img src="media/blog/5.png" alt="nissan" /></span>{voiture.portes} portes</li>
                                        </ul>
                                        <div className="b-items__cars">
                                            <div className="b-items__cars-one wow zoomInUp" data-wow-delay="0.5s">
                                                <div className="b-items__cars-one-img">
                                                    <img className="img-responsive center-block" src={`http://localhost:4000/${voiture.image.url}`} alt="nissan" />
                                                    <br />
                                                    <p className="laststock">Dernier véhicule en stock</p>
                                                    <span className="confirm-tarif ">288.00 €</span>
                                                    <p className="montant-acompte">dont 100 € d'acompte</p>
                                                </div>
                                                <div className="b-items__cars-one-info">
                                                    <header className="b-items__cars-one-info-header s-lineDownLeft">
                                                        <h2>{voiture.marque}</h2>
                                                        {/* <Link to="Reserver" className="locationVoiture" >Réserver</Link> */}
                                                        <Link to={`/reserver/${date_reservation.dateDepart}/${date_reservation.dateRetour}/${voiture.id}`} type="submit" className="btn m-btn" id="bouttonReserve">Réserver<span className="fa fa-angle-right" id="bgColor"></span></Link>
                                                    </header>
                                                    <div className="b-blog__posts-one-info">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-sm-6 col-xs-12">

                                                                <h4 className="titre-7">Choisissez vos options :</h4>
                                                                <Options id={voiture.id}/>
                                                                
                                                                
                                                                {/* <div>
                                                                    <input name="" type="checkbox" defaultValue="" />
                                                                    <span className="Annulation">Annulation Covid (voir détails) : </span><span className="cout">10.00 €</span>
                                                                </div>
                                                                <div className="contenue-1">

                                                                    <select name="" type="checkbox" tabindex="-1">
                                                                        <option>0</option>
                                                                        <option>1</option>
                                                                        <option>2</option>
                                                                        <option>3</option>
                                                                    </select>

                                                                    <span className="conducteur">Conducteur additionnel  :</span><span className="gratuit">Gratuit</span>

                                                                    <div className="ddOutOfVision" id="2-produit_61_msddHolder" >
                                                                        <select name="" type="checkbox" tabindex="-1">
                                                                            <option>0</option>
                                                                            <option>1</option>
                                                                            <option>2</option>
                                                                            <option>3</option>
                                                                        </select>
                                                                        <span className="Annulation">Siège bébé (de 0 à 3 ans)  : </span>
                                                                        <span className="cout-1">9.00 €</span>
                                                                    </div>
                                                                    <div className="ddOutOfVision" id="3-produit_61_msddHolder" >
                                                                        <select name="" type="checkbox" tabindex="-1">
                                                                            <option>0</option>
                                                                            <option>1</option>
                                                                            <option>2</option>
                                                                            <option>3</option>
                                                                        </select>
                                                                        <span className="Annulation"> Réhausseur (à partir de 3 ans) : </span>
                                                                        <span className="cout-2">9.00 €</span>
                                                                    </div>
                                                                    <input className="produit_opt optf#REF" id="4-produit_61" name="" type="checkbox" value="" />
                                                                    <span className="Annulation">GPS : </span>
                                                                    <span className="optionresult">27.00 €</span>
                                                                </div> */}
                                                            </div>
                                                            <div className="col-lg-6 col-sm-6 col-xs-12">
                                                                <div className="avantage">
                                                                    <ul className="option ">
                                                                        <li className="liste">
                                                                            <svg width="2em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-circle-fill" fill="#228dcb " xmlns="http://www.w3.org/2000/svg">
                                                                                <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z" />
                                                                            </svg>
                                                                            <span className="Prise">Prise en charge à l'aéroport</span>
                                                                        </li>
                                                                        <li className="liste">
                                                                            <svg width="2em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-circle-fill" fill="#228dcb " xmlns="http://www.w3.org/2000/svg">
                                                                                <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z" />
                                                                            </svg>
                                                                            <span className="option">Kilométrage illimité</span>
                                                                        </li>
                                                                        <li className="liste">
                                                                            <svg width="2em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-circle-fill" fill="#228dcb " xmlns="http://www.w3.org/2000/svg">
                                                                                <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z" />
                                                                            </svg>
                                                                            <span className="option">Assurance tous risques avec franchise</span>
                                                                        </li>
                                                                        <li className="liste">
                                                                            <svg width="2em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-circle-fill" fill="#228dcb " xmlns="http://www.w3.org/2000/svg">
                                                                                <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z" />
                                                                            </svg>
                                                                            <span className="option"> Carburant : plein à rendre plein</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="b-items__cars-one-info-details">
                                                        <button type="submit" onClick={() => this.changerEtape(3)} className="btn m-btn" id="buttonDetail">Détails<span className="fa fa-angle-right" id="bgDetail"></span></button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            {etape === 3 ? (<Detail />) : null}
                        </section>
                        { etape === 4 ? (<Reserver />) : null}
                    </div>)
                )}
                <br />
                <div></div>
            </div>
        )
    }
}
export default Reservation;