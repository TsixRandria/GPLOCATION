import React, { Component } from 'react';
import axios from '../../axios';

import Modal from 'react-modal';


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
            
            <section class="text-gray-700 body-font">
                <div class="container px-5 mx-auto">
                    <div class="flex flex-col text-center w-full mb-10">
                        <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">MESSAGE DES CLIENTS</h1>

                    </div>
                    <div class="w-full mx-manual overflow-auto width=100px height=100px">
                        <table class=" w-full text-left ">
                            <thead>
                            <tr>
                                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tl rounded-bl">DATE</th>
                                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">PRENOM</th>
                                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">EMAIL</th>
                                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">TELEPHONE</th>
                                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200" >MESSAGE</th>
                                <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tr rounded-br"></th>
                            </tr>
                            </thead>
                            <tbody>
                                { this.state.contacts.map(contact => {
                                    return (
                                        <tr>
                                            <td className="border px-4 py-2">{ contact.created_at }</td>
                                            <td className="border px-4 py-2">{ contact.prenom }</td>
                                            <td className="border px-4 py-2">{ contact.email}</td>
                                            <td className="border px-4 py-2">{ contact.telephone}</td>
                                            <td className="border px-4 py-2">{contact.message} 
                                            </td> 
                                            <td className="border px-4 py-2">
                                                <button
                                                    onClick={() => this.deleteMessage(contact)} 
                                                    class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                                    Supprimer
                                                </button>
                                            </td>  
                                            
                                        </tr>                           
                                       
                                    )
                                }) }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
               
                   
               
               
            </div>
        )
    }
}

export default ClientMessage;

