import React, { Component } from 'react';
import AddVoiture from './AddVoiture';
import ListeVoiture from './ListeVoiture';
import axios from '../../axios';

class Voitures extends Component {
    state = {
        voitures: []
    }

    action = {
        getVoiture: () => {
            axios.get('/voitures').then(response => {
                if (response.status === 200) {
                    this.setState({
                        voitures: response.data
                    })
                }
            })
        },
        deleteVoiture: (voiture) => {
            axios.delete(`/voitures/${voiture.id}`).then(response => {
                if (response.status === 204) {
                    this.action.getVoiture();
                }
            })
        }
    }
    

    render() {
        // Récupération de la variable voiture depuis le state
        const  { voitures } = this.state;
        return (
            <div className="p-5">
                <h1>Gestion des voitures</h1>

                <ListeVoiture
                    action={{...this.action}}
                    voitures={voitures}/>
                <AddVoiture 
                    action={{...this.action}}/>
            </div>
        )
    }
}


export default Voitures;
