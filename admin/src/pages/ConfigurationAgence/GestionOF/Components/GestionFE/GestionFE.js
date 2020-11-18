import React, { Component } from 'react';
import './gestionFE.css';

class GestionFE extends Component {
    render() {
        return (
            <div>
                <div className="right_col" role="main">
                    <div className="">
                        <div className="page-title">
                            <div className="title_left">
                                <h3>Gestion  des Fermetures <small>Exceptionnelles </small></h3>
                            </div>
                        </div>
                            <div className="clearfix"></div>
                        <div className="row">
                            <div className="clearfix"></div>
                        <div className="col-md-12 col-sm-12  ">
                            <div className="footerPanel">
                            <div className="x_title">
                                <h2>Ajouter autant de <small> périodes de Fermetures exceptionneles que nécessaire</small></h2>
                                <div className="clearfix"></div>
                            </div>

                            <div className="x_content">
                                <p>Date(s):</p>
                                <div className="tableResponsive">
                                    <span className="textLe">Le</span>
                                
                                <span className="textLe">Du</span>
                                <input type="text" className="formControl" name="table_records" /> 
                                <span className="textLe">au</span>
                                <input type="text" className="formControl" name="table_records" /> 
                                
                                <span className="textLe">
                                <button className="btn-vailde">Ajouter</button>
                                </span>
                                </div>
                           
                                    <div className="footer-content">
                                        <div className="col-md-8 col-sm-12">
                                            <div className="title_left">
                                                <h3>Périodes de fermetures exceptionnelles</h3>
                                                <ul class="list-unstyled msg_list">
                                                    <li>Lundi de pâque 2021</li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-12">
                                            <div className="title_left">
                                                <center><h3>Actions</h3></center>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GestionFE;
