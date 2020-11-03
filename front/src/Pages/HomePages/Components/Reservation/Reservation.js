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
                  <section class="b-items s-shadow">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-sm-12 col-xs-12">
                                <div class="b-items__cars">
                                    <div class="b-items__cars-one wow zoomInUp" data-wow-delay="0.5s">
                                        <div class="b-items__cars-one-img">
                                            <img className="img-responsive center-block" src="media/blog/nissanBlogTwo.jpg" alt="nissan" />
                                        </div>
                                        <div class="b-items__cars-one-info">
                                            <header class="b-items__cars-one-info-header s-lineDownLeft">
                                                <h2>Renault Clio 4</h2>
                                                <Link to="Reserver" className="locationVoiture" >Réserver</Link>
                                            </header>
                                            <div className="b-blog__posts-one-info">
                                                <div className="row">
                                                    <div className="col-lg-7 col-sm-7 col-xs-12">
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
                                                         <div className="col-lg-5 col-sm-5 col-xs-12">
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
                                               
                                                <a onClick={() => this.changerEtape(3)} type="button" class="locationDetail">VIEW DETAILS<span class="fa fa-angle-right"></span></a>
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