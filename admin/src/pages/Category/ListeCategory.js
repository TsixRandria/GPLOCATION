import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios'

export default class ListeCategory extends Component {

    componentDidMount() {
        const { action } = this.props;
        action.getCategory();

    }

    render() {
        const { categories, action } = this.props;
        return (
            <div className="py-4">
                <table className="table-auto w-full text-center whitespace-no-wrap">
                    <thead>
                        <tr>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tl rounded-bl"></th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tl rounded-bl">Ref</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Titre du produit</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Stock</th>
                            <th className="px-4 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tr rounded-br">En ligne</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200"></th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Classement</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories && categories.map(category => {
                            return (
                                <tr>
                                    <td className="border-t-2 border-gray-200 px-4 py-3">{category.id}</td>
                                    <td className="px-4 py-3">{category.ref}</td>
                                    <td className="px-4 py-3">{category.category}</td>
                                    <td className="px-4 py-3">12</td>
                                    <td className="px-4 text-center">
                                        <input name="plan" type="checkbox" />
                                    </td>
                                    <NavLink to={`/vehicules/editer/${category.id}`}>
                                        <td className=" border-b-2 border-gray-200 px-4 py-3 text-center text-blue-600">éditer</td>
                                    </NavLink>
                                    <td className="px-4 py-3 text-center text-gray-900">1</td>

                                </tr>
                            )
                        })}

                    </tbody>
                </table>

            </div>
        )
    }
}
