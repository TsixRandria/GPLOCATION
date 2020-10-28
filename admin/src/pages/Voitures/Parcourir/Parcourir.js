import React, { Component } from 'react';

export default class Parcourir extends Component {
    render() {
        return (
            <div>
                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Liste des produits</h1>
                        </div>
                        <div className="flex pl-4 mt-4 lg:w-2/3 w-full ml-auto py-2 px-6">
                            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Ajouter un produit
                                               <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                        <div>
                            <table className="table-auto w-full text-left whitespace-no-wrap">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tl rounded-bl"></th>
                                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tl rounded-bl">Ref</th>
                                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Titre du produit</th>
                                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Stock</th>
                                        <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tr rounded-br">En ligne</th>
                                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200"></th>
                                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Classement</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border-t-2 border-gray-200 px-4 py-3">img</td>
                                        <td className="px-4 py-3">Start</td>
                                        <td className="px-4 py-3">catégorieA</td>
                                        <td className="px-4 py-3">12</td>
                                        <td className="w-10 text-center">
                                            <input name="plan" type="radio" />
                                        </td>
                                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-center text-gray-900">éditer</td>
                                        <td className="px-4 py-3 text-center text-gray-900">1</td>

                                    </tr>
                                    <tr>
                                        <td className="border-t-2 border-gray-200 px-4 py-3">img</td>
                                        <td className="border-t-2 border-gray-200 px-4 py-3">Pro</td>
                                        <td className="border-t-2 border-gray-200 px-4 py-3">catégorieB</td>
                                        <td className="border-t-2 border-gray-200 px-4 py-3">5</td>
                                        <td className="border-t-2 border-gray-200 w-10 text-center">
                                            <input name="plan" type="radio" />
                                        </td>
                                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-center text-gray-900">éditer</td>
                                        <td className="border-t-2 border-gray-200 px-4 py-3 text-center text-gray-900">2</td>
                                    </tr>
                                    <tr>
                                        <td className="border-t-2 border-gray-200 px-4 py-3">img</td>
                                        <td className="border-t-2 border-gray-200 px-4 py-3">Business</td>
                                        <td className="border-t-2 border-gray-200 px-4 py-3">catégorieC+</td>
                                        <td className="border-t-2 border-gray-200 px-4 py-3">4</td>
                                        <td className="border-t-2 border-gray-200 w-10 text-center">
                                            <input name="plan" type="radio" />
                                        </td>
                                        <td className="border-t-2 border-gray-200 px-4 py-3 text-center text-gray-900">éditer</td>
                                        <td className="border-t-2 border-gray-200 px-4 py-3 text-center text-gray-900">3</td>

                                    </tr>
                                    <tr>
                                        <td className="border-t-2 border-gray-200 px-4 py-3">img</td>
                                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">Exclusive</td>
                                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">categorieD Diesel</td>
                                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">12</td>
                                        <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                                            <input name="plan" type="radio" />
                                        </td>
                                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-center text-gray-900">éditer</td>
                                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-center text-gray-900">4</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </section>
            </div>
        )
    }
}
