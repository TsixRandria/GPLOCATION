import React, { Component } from 'react';
import axios from '../../axios';

import Modal from 'react-modal';
import './message.css'

class ClientMessage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lire: false,
            contacts: []
        };
    }

    componentDidMount() {
        // Simple GET request using axios
        this.getMessage();
    }

    getMessage = () => {
        axios.get(`/contacts`)
            .then(res => {
                const contacts = res.data;
                this.setState({ contacts });
                console.log(res);
            })
    }
    
    deleteMessage = (message) => {
        axios.delete(`/contacts/${message.id}`).then(response => {
            if (response.status === 204) {
                this.getMessage();
            }
        })
    }

   

    render() {
        
        return (
            <div>
            <div class="col-md-12">
              <div class="contient-g">
                <div class="x_title">
                  <h2>MESSAGE DES CLIENTS</h2>
                 
                  <div class="clearfix"></div>
                </div>
                <div class="x_content">
                  <ul class="list-unstyled msg_list">
                  { this.state.contacts.map(contact => {
                                    return (
                    <li>
                      <a>
                        <span>
                          <span>Prenom : { contact.prenom } </span><br/>
                          <span>Email : { contact.email}</span><br/>
                          <span>Télephone : { contact.telephone}</span><br />
                          <span>Date : { contact.created_at }</span>
                        </span>
                        <span>Message :</span>
                        <span class="message">
                        
                        {contact.message} 
                        </span>
                      </a>
                      <button
                        onClick={() => this.deleteMessage(contact)} 
                        claName="bouton">
                        Supprimer
                    </button>
                    </li>
                       )
                    }) }
                  </ul>
                </div>
              </div>
            </div>
         </div>
        )
    }
}

export default ClientMessage;

