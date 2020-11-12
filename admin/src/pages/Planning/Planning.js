import React, { Component } from 'react'
import './Planning.css';


export class Planning extends Component {
    render() {
        return (
            <div className="contenu">
              <div className="right_col" role="main">
                  <div className="">
                    <div className="page-title">
                      <div className="title_left">
                        <h3>Calendar <small>Ajouter des évenement</small></h3>
                      </div>
                    </div>


            <div className="row">
              <div className="col-md-12">
                <div className="x_panel">
                  <div className="x_title">
                    <h2>Calendar Events <small>Sessions</small></h2>
                    <ul className="nav navbar-right panel_toolbox">
                      <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                      </li>
                      <li><a className="close-link"><i className="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div className="clearfix"></div>
                  </div>
                  <div className="x_content">

                    <div id='calendar'></div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
            </div>
        )
    }
}

export default Planning;







  

