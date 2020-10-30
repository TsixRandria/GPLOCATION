import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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

                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-xs-12">
                            <aside className="b-blog__aside">
                                {/* <form className="b-blog__aside-search wow zoomInUp" data-wow-delay="0.3s" action="/" method="post">
                                    <div>
                                        <input type="text" name="search" value="" placeholder="Search" />
                                        <button type="submit"><span className="fa fa-search"></span></button>
                                    </div>
                                </form> */}
                                <div className="b-blog__aside-categories wow zoomInUp" data-wow-delay="0.3s">
                                    <header className="s-lineDownLeft">
                                        <h2 className="s-titleDet">CATEGORIES</h2>
                                    </header>
                                    <nav>
                                        <ul className="b-blog__aside-categories-list">
                                            <li><img className="img-responsive center-block" src="media/blog/sprite.png" alt="nissan" />Essence</li>
                                            <li> manuelle</li>
                                            <li><span class="carac-clim"></span>Climatisation</li>
                                            <li><span class="carac-places"></span>5 places</li>
                                            <li><span class="carac-portes"></span>4/5 portes</li>
                                        </ul>
                                    </nav>
                                </div>

                            </aside>
                        </div>
                        <div className="col-md-9 col-xs-12">
                            <div className="b-blog__posts">
                                <div className="b-blog__posts-one wow zoomInUp" data-wow-delay="0.3s">
                                    <div className="row">
                                        <div className="col-xs-8">
                                            <header className="b-blog__posts-one-body-head s-lineDownLeft">
                                                <h2 className="s-titleDet">Renault Clio 4</h2>
                                            </header>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-4 pull-right">
                                            <img className="img-responsive center-block" src="media/blog/nissanBlogTwo.jpg" alt="nissan" />
                                            <div className="louer"><button onClick={() => this.changerEtape(4)} type="button" className="btn m-btn m-readMore">Réserver<span className="fa fa-angle-right"></span></button></div>
                                        </div>
                                        <div className="col-xs-8 pull-right">
                                            <div className="b-blog__posts-one-info">
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

                                                
                                                 <button onClick={() => this.changerEtape(3)} type="button" className="bouton">
                                                 <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus" fill="white" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                                    </svg>
                                                     Détails
                                                </button>
                                                
                                            </div>
                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    {etape === 3 ? (<Detail />) : null}
                </div>


                { etape === 4 ? (<Reserver />) : null}
            </div >
        )
    }
}
export default Reservation;