import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from '../../../../../axios';

import './gestionOF.css'


class GestionOF extends Component {
  componentDidMount() {
    axios.post('/gestion_temp').then(response => {
        if (response.status === 200) {
            this.setState({
              ouverture: response.data
            })
        }
    })
}
    render() {
        return (
            <div>
                <div className="right_col" role="main">
                    <div className="">
                        <div className="page-title">
                        <div className="title_left">
                            <h3>Gestion d'<small>Ouvertures et de Fermetures</small></h3>
                        </div>

                        </div>

                        <div className="clearfix"></div>

                        <div className="row">
                        

                        <div className="clearfix"></div>

                        <div className="col-md-12 col-sm-12  ">
                            <div className="panel">
                                <div className="x_title">
                                    <h2>Gestion <small>des Ouvertures</small></h2>
                                    <div className="clearfix"></div>
                                </div>

                                <div className="x_content">

                                
                                    <div className="tableResponsive">
                                    <h2>Definition des jours d'ouvertures</h2>
                                    <Formik
                                          initialValues={{
                                            jour:'',
                                            surplus:''
                                          }}
                                          onSubmit={(values, { resetForm }) => {
                                            axios.post('/gestion_temp', values).then(response => {
                                                const { action } = this.props;
                                                if (response.status === 201) {
                                                    resetForm();
                                                    action.getGestionTemp();
                                                }
                                            })
                                        }
                                        }
                                          >
                                            <Form
                                            autoComplete="off">
                                    <table className="table table-striped jambo_table bulk_action">
                                        <tbody>
                                        <tr className="even pointer">
                                            <td className="a-center ">
                                            <Field type="checkbox" className="flat" name="Lundi" /> <span className="jourText">Lundi</span>
                                            </td>
                                            <td className=" "><span className="plusEgale"> Surplus = </span> <Field type="text" className="flat" name="Lundi" placeholder="0"/></td>
                                            
                                        </tr>
                                        <tr className="odd pointer">
                                            <td className="a-center ">
                                            <Field type="checkbox" className="flat" name="Mardi" /> <span className="jourText">Mardi</span>
                                            </td>
                                            <td className=" "><span className="plusEgale"> Surplus = </span> <Field type="text" className="flat" name="Mardi" placeholder="0"/></td>
                                        
                                        </tr>
                                        <tr className="even pointer">
                                            <td className="a-center ">
                                            <Field type="checkbox" className="flat" name="Mercredi" /> <span className="jourText">Mercredi</span>
                                            </td>
                                            <td className=" "><span className="plusEgale"> Surplus = </span> <Field type="text" className="flat" name="mercredi" placeholder="0"/></td>
                                        
                                        </tr>
                                        <tr className="odd pointer">
                                            <td className="a-center ">
                                            <Field type="checkbox" className="flat" name="Jeudi" /> <span className="jourText">Jeudi</span>
                                            </td>
                                            <td className=" "><span className="plusEgale"> Surplus = </span> <Field type="text" className="flat" name="jeudi" placeholder="0"/></td>
                                        
                                        </tr>
                                        <tr className="even pointer">
                                            <td className="a-center ">
                                            <Field type="checkbox" className="flat" name="Vendredi" /> <span className="jourText">Vendredi</span>
                                            </td>
                                            <td className=" "><span className="plusEgale"> <span className="plusEgale"> Surplus = </span> </span><Field type="vendredi" className="flat" name="table_records" placeholder="0"/></td>
                                            
                                        </tr>
                                        <tr className="odd pointer">
                                            <td className="a-center ">
                                            <Field type="checkbox" className="flat" name="Samedi" /> <span className="jourText">Samedi</span>
                                            </td>
                                            <td className=" "><span className="plusEgale"> <span className="plusEgale"> Surplus = </span> </span> <Field type="text" className="flat" name="samedi" placeholder="0"/></td>
                                        
                                        </tr>
                                        <tr className="even pointer">
                                            <td className="a-center ">
                                            <Field type="checkbox" className="flat" name="Dimanche" /> <span className="jourText">Dimanche</span>
                                            </td>
                                            <td className=" "><span className="plusEgale"> Surplus = </span> <Field type="text" className="flat" name="dimanche" placeholder="0"/></td>
                                            
                                        </tr>
                                        </tbody>
                                    </table>
                                    <button type="submit" className="btnValider">Valider</button>
                                    </Form>
                                    </Formik> 
                                    </div>
                                            
                                        
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right_col" role="main">
                    <div className="">
                        <div className="page-title">
                            <div className="title_left">
                                <h3>Surplus d'<small>Horaires par jour</small></h3>
                            </div>
                        </div>
                            <div className="clearfix"></div>
                        <div className="row">
                            <div className="clearfix"></div>
                        <div className="col-md-12 col-sm-12  ">
                            <div className="footerPanel">
                            <div className="x_title">
                                <h2>Ajouter autant de <small> surplus d'horaires par jour que nécessaire .</small></h2>
                                <div className="clearfix"></div>
                            </div>

                            <div className="x_content">
                                <div className="tableResponsive">
                                    <span className="textLe">Le</span>
                                <label><select name="datatable_length" aria-controls="datatable" class="form-control input-sm">
                                            <option value="10">Lundi</option>
                                            <option value="25">Mardi</option>
                                            <option value="50">Mercredi</option>
                                            <option value="100">Jeudi</option>
                                            <option value="25">Vendredi</option>
                                            <option value="50">Samedi</option>
                                            <option value="100">Dimanche</option>
                                          </select>
                                </label>
                                <span className="textLe">Entre</span>
                                <label><select name="datatable_length" aria-controls="datatable" class="form-control input-sm">
                                            <option value="10">00</option>
                                            <option value="25">01</option>
                                            <option value="50">02</option>
                                            <option value="100">03</option>
                                            <option value="25">04</option>
                                            <option value="50">05</option>
                                            <option value="100">06</option>
                                            <option value="10">07</option>
                                            <option value="25">08</option>
                                            <option value="50">09</option>
                                            <option value="100">10</option>
                                            <option value="25">11</option>
                                            <option value="50">12</option>
                                          </select>
                                </label>
                                <span className="textLe">:</span>
                                <label><select name="datatable_length" aria-controls="datatable" class="form-control input-sm">
                                            <option value="10">00</option>
                                            <option value="25">01</option>
                                            <option value="50">02</option>
                                            <option value="100">03</option>
                                            <option value="25">04</option>
                                            <option value="50">05</option>
                                            <option value="100">06</option>
                                            <option value="10">07</option>
                                            <option value="25">08</option>
                                            <option value="50">09</option>
                                            <option value="100">10</option>
                                            <option value="25">11</option>
                                            <option value="50">12</option>
                                          </select>
                                </label>
                                <span className="textLe">et</span>
                                <label><select name="datatable_length" aria-controls="datatable" class="form-control input-sm">
                                            <option value="10">00</option>
                                            <option value="25">01</option>
                                            <option value="50">02</option>
                                            <option value="100">03</option>
                                            <option value="25">04</option>
                                            <option value="50">05</option>
                                            <option value="100">06</option>
                                            <option value="10">07</option>
                                            <option value="25">08</option>
                                            <option value="50">09</option>
                                            <option value="100">10</option>
                                            <option value="25">11</option>
                                            <option value="50">12</option>
                                          </select>
                                </label>
                                <span className="textLe">:</span>
                                <label><select name="datatable_length" aria-controls="datatable" class="form-control input-sm">
                                            <option value="10">00</option>
                                            <option value="25">01</option>
                                            <option value="50">02</option>
                                            <option value="100">03</option>
                                            <option value="25">04</option>
                                            <option value="50">05</option>
                                            <option value="100">06</option>
                                            <option value="10">07</option>
                                            <option value="25">08</option>
                                            <option value="50">09</option>
                                            <option value="100">10</option>
                                            <option value="25">11</option>
                                            <option value="50">12</option>
                                          </select>
                                </label>
                                <span className="textLe">Surplus =</span>
                                <input type="text" className="formControl" name="table_records" /> 
                                <span className="textLe">
                                <button className="btn-vailde">Valider</button>
                                </span>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="row">
              <div class="col-md-4">
                <div class="x_pane">
                  <div class="x_title">
                    <h2>Jour de la  <small>Semaine</small></h2>
                    
                    <div class="clearfix"></div>
                  </div>
                  <p>Lundi</p>
                </div>
              </div>

              <div class="col-md-4">
                <div class="x_pane">
                  <div class="x_title">
                    <h2>Tranche <small>Horraire</small></h2>
                    
                    <div class="clearfix"></div>
                  </div>
                  <p>Entre 20h35 et 23h45 </p>
                </div>
              </div>

              <div class="col-md-2">
                <div class="x_pane">
                  <div class="x_title">
                    <h2>Sur plus</h2>
                    
                    <div class="clearfix"></div>
                  </div>
                    20£
                </div>
              </div>
              <div class="col-md-2">
                <div class="x_pane">
                  <div class="x_title">
                    <h2>Actions</h2>
                    <div class="clearfix"></div>
                  </div>
                  <span className="number-text">X</span>
                </div>
              </div>
            </div>
          
            </div>
        );
    }
}

export default GestionOF;
