import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from '../../../axios';
import AddTarifDetail from './TarifDetail/AddTarifDetail';

export default class ListeTarif extends Component {
    componentDidMount() {
        const { action } = this.props;
        action.getTarif();

        axios.get('/categories').then(response => {
            if (response.status === 200) {
                this.setState({
                    categories: response.data
                })
            }
        })

    }

    state = {
        categories: []
    }


    render() {
        const { categories } = this.state;
        // console.log(this.props, categories)
        const { tarifs, action } = this.props;
        console.log(tarifs)

        return (
            <div className="py-4">
                <h2>Liste des tarifs</h2>
                <div className="mt-2">
                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2">Du:</th>
                                <th className="border px-4 py-2">Au:</th>

                                <th className="border px-4 py-2">Catégorie:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tarifs && tarifs.map(tarif => {
                                return (
                                    <tr>
                                        <td className="border px-4 py-2">{tarif.date_debut}</td>
                                        <td className="border px-4 py-2">{tarif.date_fin}</td>
                                        <td className="border px-4 py-2">{tarif.category_id}</td>
                                        <td className="border px-4 py-2">
                                            <NavLink to={`/tarifs/${tarif.id}/tarif_details`}>
                                                <button
                                                    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
                                                    onClick={() => this.props.action.toggleModal(true)}>Ajouter un tarif</button>

                                            </NavLink>
                                            <span className="text-red-500 cursor-pointer" onClick={() => action.deleteTarif(tarif)}>Supprimer</span>
                                        </td>
                                    </tr>

                                )
                            })
                            }

                        </tbody>
                    </table>
                </div>


                { tarifs && tarifs.length === 0 ? (<>Aucun tarif disponible pour le moment.</>) : null}

            </div>
        )
    }
}
