import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';


export default class ListeTarifDetail extends Component {
    componentDidMount() {
        const { action } = this.props;
        action.getTarifDetail();
    }

    render() {
        const { tarifDetails, action } = this.props;
        return (
            <div className="py-4">
                <h2>Liste des détails du tarif</h2>
                <div className="mt-2">
                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2">Durée</th>
                                <th className="border px-4 py-2">Prix</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tarifDetails && tarifDetails.map(tarifDetail => {
                                return (
                                    <tr>
                                        <td className="border px-4 py-2">tarif &nbsp; {tarifDetail.duree} j </td>
                                        <td className="border px-4 py-2">{tarifDetail.prix} £/j</td>
                                        <td className="border px-4 py-2">
                                            <span className="text-red-500 cursor-pointer" onClick={() => action.deleteTarifDetail(tarifDetail)}>Supprimer</span>
                                        </td>
                                    </tr>

                                )
                            })}

                        </tbody>
                    </table>
                </div>

                { tarifDetails && tarifDetails.length === 0 ? (<>Aucun tarif disponible pour le moment.</>) : null}
            </div>
        )
    }
}
