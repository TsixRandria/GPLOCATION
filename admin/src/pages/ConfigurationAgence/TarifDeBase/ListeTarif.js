import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class ListeTarif extends Component {
    componentDidMount() {
        const { action } = this.props;
        action.getTarif();
    }

    render() {
        const { tarifs, action } = this.props;
        return (
            <div className="py-4">
                <h2>Liste des tarifs</h2>
                <div className="mt-2">
                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2">Du:</th>
                                <th className="border px-4 py-2">Au:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tarifs && tarifs.map(tarif => {
                                return (
                                    <tr>
                                        <td className="border px-4 py-2">{tarif.date_debut}</td>
                                        <td className="border px-4 py-2">{tarif.date_fin}</td>
                                        <td className="border px-4 py-2">
                                            <span className="text-red-500 cursor-pointer" onClick={() => action.deleteTarif(tarif)}>Supprimer</span>
                                        </td>
                                    </tr>

                                )
                            })}

                        </tbody>
                    </table>
                </div>

                { tarifs && tarifs.length === 0 ? (<>Aucun tarif disponible pour le moment.</>) : null}
            </div>
        )
    }
}
