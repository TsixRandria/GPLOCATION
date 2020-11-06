import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Detail from './Detail/Detail';
import Reserver from './Reserver/Reserver';
import { MdRowing } from "react-icons/cg";
import './Reservation.css';

class Reservation extends Component {
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
            <div>
                  <section class="b-items s-shadow" id="padingReserver">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-sm-12 col-xs-12">
                            <ul class="carac-prod">
                                <li className="imagePading"><span className="imagePading"><img  src="media/blog/1.png" alt="nissan" /></span>Essence</li>
                                <li className="imagePading"><sapn className="imagePading"><img  src="media/blog/2.jpg" alt="nissan" /></sapn>manuelle</li>
                                <li className="imagePading"><span className="imagePading"><img  src="media/blog/3.jpg" alt="nissan" /></span>Climatisation</li>
                                <li className="imagePading"><span className="imagePading"><img  src="media/blog/4.jpg" alt="nissan" /></span>4 places</li>
                                <li className="imagePading"><span className="imagePading"><img  src="media/blog/5.png" alt="nissan" /></span>2 portes</li>
                            </ul>
                                <div class="b-items__cars">
                                    <div class="b-items__cars-one wow zoomInUp" data-wow-delay="0.5s">
                                        <div class="b-items__cars-one-img">
                                            <img className="img-responsive center-block" src="media/blog/nissanBlogTwo.jpg" alt="nissan" />
                                            <br />
                                            <p className="laststock">Dernier véhicule en stock</p>
                                            <span class="confirm-tarif ">288.00 €</span>
                                            <p class="montant-acompte">dont 100 € d'acompte</p>
                                        </div>
                                        <div class="b-items__cars-one-info">
                                            <header class="b-items__cars-one-info-header s-lineDownLeft">
                                                <h2>Renault Clio 4</h2>
                                                {/* <Link to="Reserver" className="locationVoiture" >Réserver</Link> */}
                                                <Link to="Reserver" type="submit" className="btn m-btn" id="bouttonReserve">Réserver<span className="fa fa-angle-right" id="bgColor"></span></Link>
                                            </header>
                                            <div className="b-blog__posts-one-info">
                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6 col-xs-12">
                                            
                                                    <h4 className="titre-7">Choisissez vos options :</h4>
                                                        <div>
                                                            <input  name="" type="checkbox" value="" />
                                                            <span className="Annulation">Annulation Covid (voir détails) : </span><span className="cout">10.00 €</span>
                                                        </div>       
                                                        <div className="contenue-1">
                                                     
                                                            <select  name="" type="checkbox" tabindex="-1">
                                                                <option>0</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                            </select>
                                                        
                                                            <span className="conducteur">Conducteur additionnel  :</span><span className="gratuit">Gratuit</span>
                                                        
                                                        <div class="ddOutOfVision" id="2-produit_61_msddHolder" >
                                                            <select  name="" type="checkbox" tabindex="-1">
                                                                <option>0</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                            </select>
                                                            <span className="Annulation">Siège bébé (de 0 à 3 ans)  : </span>
                                                             <span className="cout-1">9.00 €</span>
                                                        </div>
                                                        <div class="ddOutOfVision" id="3-produit_61_msddHolder" >
                                                            <select  name="" type="checkbox" tabindex="-1">
                                                                    <option>0</option>
                                                                    <option>1</option>
                                                                    <option>2</option>
                                                                    <option>3</option>
                                                            </select>
                                                           <span className="Annulation"> Réhausseur (à partir de 3 ans) : </span>
                                                           <span className="cout-2">9.00 €</span>
                                                        </div>
                                                            <input class="produit_opt optf#REF" id="4-produit_61" name="" type="checkbox" value="" />
                                                            <span className="Annulation">GPS : </span>
                                                            <span className="optionresult">27.00 €</span>
                                                         </div>
                                                         </div>
                                                         <div className="col-lg-6 col-sm-6 col-xs-12">
                                                         <div className="avantage">
                                                            <ul class="option ">
                                                                <li className="liste">
                                                                    <svg width="2em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle-fill" fill="#228dcb " xmlns="http://www.w3.org/2000/svg">
                                                                    <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"/>
                                                                    </svg>
                                                                    <span className="Prise">Prise en charge à l'aéroport</span>
                                                                </li>
                                                                <li className="liste">
                                                                    <svg width="2em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle-fill" fill="#228dcb " xmlns="http://www.w3.org/2000/svg">
                                                                    <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"/>
                                                                    </svg>
                                                                   <span className="option">Kilométrage illimité</span>
                                                                </li>
                                                                <li className="liste">
                                                                    <svg width="2em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle-fill" fill="#228dcb " xmlns="http://www.w3.org/2000/svg">
                                                                    <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"/>
                                                                    </svg>
                                                                    <span className="option">Assurance tous risques avec franchise</span>
                                                                </li>
                                                                <li className="liste">
                                                                <svg width="2em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle-fill" fill="#228dcb " xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"/>
                                                                </svg>
                                                                <span className="option"> Carburant : plein à rendre plein</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                            
                                            <div class="b-items__cars-one-info-details">
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
            </div>       
                )
            }
        }
        export default Reservation;