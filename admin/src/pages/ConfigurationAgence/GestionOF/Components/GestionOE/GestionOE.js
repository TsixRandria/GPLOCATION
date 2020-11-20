import React, { Component } from 'react';

class GestionOE extends Component {
    render() {
        return (
            <div>
                <div className="right_col" role="main">
                    <div className="">
                        <div className="page-title">
                            <div className="title_left">
                                <h3>Gestion  des Ouvertures <small>Exceptionnelles </small></h3>
                            </div>
                        </div>
                            <div className="clearfix"></div>
                        <div className="row">
                            <div className="clearfix"></div>
                        <div className="col-md-12 col-sm-12  ">
                            <div className="footerPanel">
                            <div className="x_title">
                                <h2>Ajouter autant de <small> périodes d'ouvertures exceptionneles que nécessaire</small></h2>
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

export default GestionOE;
