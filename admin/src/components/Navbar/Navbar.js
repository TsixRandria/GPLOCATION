import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.styles.scss';

class Navbar extends Component {
    render() {
        return (
            <>
                <header className="navbar-block text-white body-font bg-black">
                    <div className="flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                            <span className="ml-3 text-xl">GPLOCATION</span>
                        </a>
                        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                            Utilisateur
                        </nav>
                    </div>
                </header>
            </>
        )
    }
}

export default Navbar;
