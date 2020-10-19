import React, { Component } from 'react';
import axios from '../../axios';

export default class ListeVoiture extends Component {
    state = {
        voitures: []
    }

    componentDidMount() {
        this.getVoiture()
    }

    getVoiture = () => {
        axios.get('/voitures').then(response => {
            if (response.status === 200) {
                this.setState({
                    voitures: response.data
                })
            }
        })
    }

    deleteVoiture = (voiture) => {
        axios.delete(`/voitures/${voiture.id}`).then(response => {
            if (response.status === 204) {
                this.getVoiture();
            }
        })
    }

    render() {
        const { voitures } = this.state;
        return (
            <div className="container mx-auto p-5">
                <h1>Liste des voitures</h1>

                { voitures && voitures.map(voiture => {
                    return (
                        <div>
                            { voiture.marque } { voiture.model } <span className="text-red-500" onClick={() => this.deleteVoiture(voiture)}>Supprimer</span>
                        </div>
                    )
                }) }
                
            </div>
        )
    }
}
