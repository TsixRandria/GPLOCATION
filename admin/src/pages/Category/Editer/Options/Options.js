import React, { Component } from 'react';
import axios from '../../../axios';
import ListeOptions from './ListeOptions';
import AddOption from './AddOption';

import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';

class Options extends Component {
    state = {
        addNew: false,
        categories: [],
        options: []
    }
    action = {
        toggleModal: (value) => {
            this.setState({ addNew: value })
        },
        getCategory: () => {
            axios.get('/categories').then(response => {
                if (response.status === 200) {
                    this.setState({
                        categories: response.data
                    })
                }
            })
        },
        getOption: () => {
            axios.get(`/categories/${category.id}/options`).then(response => {
                if (response.status === 200) {
                    this.setState({
                        options: response.data
                    })
                }
            })
        },
        deleteOption: (option) => {
            axios.delete(`/categories/${category.id}/options/${option.id}`).then(response => {
                if (response.status === 204) {
                    this.action.getOption();
                }
            })
        },

    }


    render() {
        // Récupération de la variable voiture depuis le state
        const { addNew, options } = this.state;
        return (
            <div className="p-5">
                <NavLink to="/categories" >
                    <button class="text-white bg-indigo-500 border-0 hover:bg-indigo-600 font-bold py-2 px-4 rounded">Retour</button>
                </NavLink>
                <h1 className="mb-2 text-center">Gestion des options</h1>

                <button
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
                    onClick={() => this.action.toggleModal(true)}>Nouvelle voiture</button>
                <ListeOptions
                    action={{ ...this.action }}
                    options={options} />
                <Modal
                    isOpen={addNew}
                    className="modal-modern">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-title">
                                <h2>Ajouter une option</h2>
                            </div>
                            <div
                                onClick={() => this.setState({ addNew: false })}
                                className="modal-close">X</div>
                        </div>
                        <hr className="my-4" />


                        <AddOption
                            action={{ ...this.action }} />
                    </div>
                </Modal>
            </div>
        )
    }
}


export default Options;
