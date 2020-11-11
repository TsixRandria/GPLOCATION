import React, { Component } from 'react';
import AddTarifDetail from './AddTarifDetail';
import ListeTarifDetail from './ListeTarifDetail';
import axios from '../../../../axios';

import Modal from 'react-modal';
// import { NavLink } from 'react-router-dom';

class TarifDetails extends Component {
    state = {
        addNew: false,
        tarifDetails: []
    }

    action = {
        toggleModal: (value) => {
            this.setState({ addNew: value })
        },
        getTarifDetail: () => {
            axios.get('/tarif_details').then(response => {
                if (response.status === 200) {
                    this.setState({
                        tarifDetails: response.data
                    })
                }
            })
        },
        deleteTarifDetail: (tarifDetail) => {
            axios.delete(`/tarif_details/${tarifDetail.id}`).then(response => {
                if (response.status === 204) {
                    this.action.getTarifDetail();
                }
            })
        },
    }


    render() {
        // Récupération de la variable tarif depuis le state
        const { addNew, tarifDetails } = this.state;
        return (
            <div className="p-5">
                <h1 className="text-center">Gestion de Tarif de base</h1>
                <button
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
                    onClick={() => this.action.toggleModal(true)}>Nouveau tarif</button>
                <ListeTarifDetail
                    action={{ ...this.action }}
                    tarifDetails={tarifDetails} />
                <Modal
                    isOpen={addNew}
                    className="modal-modern">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-title">
                                <h2>Insertion du nouveau détail du tarif</h2>
                            </div>
                            <div
                                onClick={() => this.setState({ addNew: false })}
                                className="modal-close">X</div>
                        </div>
                        <hr className="my-4" />


                        <AddTarifDetail
                            action={{ ...this.action }} />
                    </div>
                </Modal>
            </div>
        )
    }
}


export default TarifDetails;
