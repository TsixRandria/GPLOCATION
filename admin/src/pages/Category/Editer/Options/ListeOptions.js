import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



export default class ListeOptions extends Component {
    state = {
        etape: 1
    }

    componentDidMount() {
        const { action } = this.props;
        action.getOption();
    }

    changerEtape = (newEtape) => {
        this.setState({
            etape: newEtape
        });
    }

    render() {
        const etape = this.state.etape;
        const { options, action } = this.props;
        console.log(options)

        return (
            <div className="py-4">
                <h2>Liste des options</h2>
                <div className="mt-2">
                    <table className="table-auto bg-gray-100">
                        <thead>
                            <tr>

                                <th className="border px-4 py-2">Titre</th>
                                <th className="border px-4 py-2">Prix</th>
                            </tr>
                        </thead>
                        <tbody>
                            {options && options.map(option => {
                                return (
                                    <tr>
                                        <td className="border px-4 py-2">{option.libelle}</td>
                                        <td className="border px-4 py-2">{option.prix}</td>
                                        <td className="border px-4 py-2">
                                            {/* <NavLink to={`/categories/${params.id}/${option.id}`}>  onClick={() => this.changerEtape(2)}*/}
                                            <span className="text-blue-500 cursor-pointer">Editer</span> &nbsp;
                                            {/* </NavLink> */}
                                            <span className="text-red-500 cursor-pointer" onClick={() => action.deleteOption(option)}>X</span>
                                        </td>
                                    </tr>

                                )
                            })}

                        </tbody>
                    </table>
                </div>

                <center>{options && options.length === 0 ? (<>Aucune option disponible pour le moment.</>) : null}</center>

            </div>





        )
    }
}
