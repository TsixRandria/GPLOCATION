import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class GestionTarifAgence extends Component {
    render() {
        return (
            <div>
                <NavLink to="/editer" >
                    <button class="text-white bg-indigo-500 border-0 hover:bg-indigo-600 font-bold py-2 px-4 rounded">Retour</button>
                </NavLink>
            </div>
        )
    }
}
