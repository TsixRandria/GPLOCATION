import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AddTarif from './AddTarif'


class Tarif extends Component {
  
    render() {
        return (
            <>
            <center>
                <h1>LES TARIF DE BASE</h1>
            </center>
            <NavLink to="/tarifpersonnaliser" >
                <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Personnaliser le tarif</button>
            </NavLink>
            <div>
                <AddTarif />
            </div> 
            </>
        )
    }
}

export default Tarif
