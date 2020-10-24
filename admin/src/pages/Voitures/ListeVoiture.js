import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class ListeVoiture extends Component {
    componentDidMount() {
        const { action } = this.props;
        action.getVoiture();
    }

    render() {
        const { voitures, action } = this.props;
        return (
            <div className="py-4">
                <h2>Liste des voitures</h2>
                <div className="mt-2">
                    <table className="table-auto">
                        <thead>
                            <tr>
                            <th className="border px-4 py-2">Marque</th>
                            <th className="border px-4 py-2">Modèle</th>
                            <th className="border px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { voitures && voitures.map(voiture => {
                                return (
                                    <tr>
                                        <td className="border px-4 py-2">{ voiture.marque }</td>
                                        <td className="border px-4 py-2">{ voiture.model }</td>
                                        <td className="border px-4 py-2">
                                            <NavLink to={`/voitures/detail/${voiture.id}`}>
                                                <span className="text-blue-500 cursor-pointer">Voir détail</span> &nbsp;
                                            </NavLink>
                                            <span className="text-red-500 cursor-pointer" onClick={() => action.deleteVoiture(voiture)}>Supprimer</span>
                                        </td>
                                    </tr>
                                )
                            }) }
                            
                        </tbody>
                    </table>
                </div>
                
                { voitures && voitures.length === 0 ? (<>Aucune voiture disponible pour le moment.</>) : null }
            </div>
        )
    }
}
