import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class ListeCategory extends Component {
    componentDidMount() {
        const { action } = this.props;
        action.getCategory();
    }

    render() {
        const { categories, action } = this.props;
        return (
            <div className="py-4">
                <h2>Liste des catégories de voiture</h2>
                <div className="mt-2">
                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2">Ref</th>
                                <th className="border px-4 py-2">Type du produit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories && categories.map(category => {
                                return (
                                    <tr>
                                        <td className="border px-4 py-2">{category.ref}</td>
                                        <td className="border px-4 py-2">{category.category}</td>
                                        <td className="border px-4 py-2">
                                            <NavLink to={`/categories/${category.id}`}>
                                                <span className="text-blue-500 cursor-pointer">Voir détail</span> &nbsp;
                                            </NavLink>
                                            <span className="text-red-500 cursor-pointer" onClick={() => action.deleteCategory(category)}>Supprimer</span>
                                        </td>
                                    </tr>

                                )
                            })}

                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}
