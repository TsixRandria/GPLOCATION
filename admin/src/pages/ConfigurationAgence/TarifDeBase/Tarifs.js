import React, { Component } from 'react';
import AddTarif from './AddTarif';
import ListeTarif from './ListeTarif';
import axios from '../../../axios';

import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';

class Tarifs extends Component {
    state = {
        addNew: false,
        tarifs: [],
        categories: [],
        tarifDetail: []
    }

    action = {
        toggleModal: (value) => {
            this.setState({ addNew: value })
        },
        getTarif: () => {
            axios.get('/tarifs/').then(response => {
                if (response.status === 200) {
                    this.setState({
                        tarifs: response.data
                    })
                }
            })
        },
        deleteTarif: (tarif) => {
            axios.delete(`/tarifs/${tarif.id}`).then(response => {
                if (response.status === 204) {
                    this.action.getTarif();
                }
            })
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
    }


    render() {
        // Récupération de la variable tarif depuis le state
        const { addNew, tarifs } = this.state;
        return (
            <div className="p-5">
                <h1 className="text-center">Gestion de Tarif de base</h1>
                <button
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
                    onClick={() => this.action.toggleModal(true)}>Nouveau tarif</button>
                <ListeTarif
                    action={{ ...this.action }}
                    tarifs={tarifs} />
                <Modal
                    isOpen={addNew}
                    className="modal-modern">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-title">
                                <h2>Insertion du nouveau tarif</h2>
                            </div>
                            <div
                                onClick={() => this.setState({ addNew: false })}
                                className="modal-close">X</div>
                        </div>
                        <hr className="my-4" />


                        <AddTarif
                            action={{ ...this.action }} />
                    </div>
                </Modal>
            </div>
        )
    }
}


export default Tarifs;
