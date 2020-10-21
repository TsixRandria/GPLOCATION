import React, { Component } from 'react';


export default class listeContact extends Component {
    componentDidMount() {
        const { action } = this.props;
        action.getcontact();
    }
    render() {
        const { contacts, action } = this.props;
        return (
            <div>
                <div className="py-4">
                <h2>Liste des contacts</h2>
                <div className="mt-2">
                    <table className="table-auto">
                        <thead>
                            <tr>
                            <th className="border px-4 py-2">Nom</th>
                            <th className="border px-4 py-2">Prénom</th>
                            <th className="border px-4 py-2">email</th>
                            <th className="border px-4 py-2">Téléphone</th>
                            <th className="border px-4 py-2">Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            { contacts && contacts.map(contact => {
                                return (
                                    <tr>
                                        <td className="border px-4 py-2">{ contact.nom }</td>
                                        <td className="border px-4 py-2">{ contact.prenom }</td>
                                        <td className="border px-4 py-2">{ contact.email }</td>
                                        <td className="border px-4 py-2">{ contact.telephone }</td>
                                        <td className="border px-4 py-2">{ contact.message }</td>
                                        <td className="border px-4 py-2">
                                            <NavLink to={`/contacts/detail/${contact.id}`}>
                                                <span className="text-blue-500 cursor-pointer">Voir détail</span> &nbsp;
                                            </NavLink>
                                            <span className="text-red-500 cursor-pointer" onClick={() => action.deletecontact(contact)}>Supprimer</span>
                                        </td>
                                    </tr>
                                )
                            }) }
                            
                        </tbody>
                    </table>
                </div>
                
                { contacts && contacts.length === 0 ? (<>Aucune contact disponible pour le moment.</>) : null }
            
            </div>
        )
    }
}
