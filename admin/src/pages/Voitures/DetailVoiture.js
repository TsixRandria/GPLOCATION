import React, { Component } from 'react';
import axios from '../../axios';

import InlineEdit from '../../components/InlineEdit/InlineEdit';

export default class DetailVoiture extends Component {
    state = {
        voiture: {}
    }

    componentDidMount() {
        this.getDetail();
    }

    getDetail = () => {
        // Récupération de l'id depuis le route dynamique
        const id = this.props.match.params.id;
        
        // Envoi d'une requête HTTP pour récupérer le détail de la voiture
        axios.get(`/voitures/${id}`).then(response => {
            if (response.status === 200) {
                this.setState({
                    voiture: response.data
                });
            }
        });
    }

    updateVoiture = (row, value) => {
        // Récupération de l'id depuis le route dynamique
        const id = this.props.match.params.id;

        // Mise à jour de la voiture selon le champ modifié
        let { voiture } = this.state;
        voiture[row] = value;

        axios.put(`/voitures/${id}`, voiture).then(response => {
            if (response.status === 204) {
                this.getDetail();
            }
        });
    }

    render() {
        const { voiture } = this.state;
        return (
            <>
                <div className="p-5">
                    <h1>Détail de la voiture</h1>
                    <div className="flex">
                        Marque : &nbsp;
                        <InlineEdit 
                            onSave={(value) => this.updateVoiture('marque', value)}
                            style={{flex: 'auto'}} 
                            value={ voiture.marque } />
                    </div>
                    <div className="flex">
                        Model : &nbsp;
                        <InlineEdit 
                            onSave={(value) => this.updateVoiture('model', value)}
                            style={{flex: 'auto'}} 
                            value={ voiture.model } />
                    </div>
                    
                </div>
            </>
        )
    }
}
