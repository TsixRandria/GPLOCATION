import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.styles.scss';

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar-block">
                <div className="app-title">
                    GPLOCATION
                </div>
                <div className="app-menu">
                    <NavLink to="/" className="hover:text-white">
                        <div className="menu-item">Tableau de bord</div>
                    </NavLink>
                    <NavLink to="/voitures" className="hover:text-white">
                        <div className="menu-item">Voitures</div>
                    </NavLink>
                    <NavLink to="/utilisateurs" className="hover:text-white">
                        <div className="menu-item">Utilisateurs</div>
                    </NavLink>
                </div>
            </div>
        )
    }
}
