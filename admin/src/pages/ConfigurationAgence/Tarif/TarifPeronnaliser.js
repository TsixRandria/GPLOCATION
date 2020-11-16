import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import {Formik, Field, Form} from 'formik';
import axios from '../../../axios';


export class TarifPeronnaliser extends Component {
    state = {
        category: []
    }
    componentDidMount() {
        axios.get('/categories').then(response => {
            if (response.status === 200) {
                this.setState({
                  category: response.data
              });
              console.log(response);
            }
          });
    }
    render() {
        const {categories} = this.state.category
        console.log()
        return (
            <div>
                <div className="p-5">
                <NavLink to="/tarif" >
                    <button className="text-white bg-indigo-500 border-0 hover:bg-indigo-600 
                    font-bold py-2 px-4 rounded">Retour</button>
                </NavLink>
                <h1>Gestion des tarifs personnalisées</h1>
                <Formik
                    initialValues={{
                        date_debut: '',
                        date_fin: ''
                    }}

                    onSubmit={(value, {resetForm}) => {
                        axios.post('/tarifs', value).then(response => {
                            if (response.status === 201) {
                               
                                resetForm();
                                
                            }
                        })
                    }}
                >
                {({ handleSubmit }) => (
                    <Form className="w-full max-w-lg col-md-6" onSubmit={handleSubmit}>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                            for="grid-first-name">
                                Date de debut
                            </label>
                            <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 
                            rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="date" />
                            
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Date de la fin
                            </label>
                            <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 
                            leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="date"/>
                            </div>
                        </div>
                        <div className="inline-block relative w-64">
                        
                            <Field as="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 
                            rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            
                            
                            </Field>
                            
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                        
                        <div className="flex justify-end">
                            <button type="submit" className="text-white px-4 py-2 bg-blue-500 hover:bg-blue-400">Sauvegarder</button>
                        </div>
                    </Form>)}
                </Formik>
               
                <form>
                   <br/><br/>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                                City
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 
                            leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"/>
                        </div>
                            <div ></div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                Zip
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 
                            leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
                        </div>

                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                Zip
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 
                            leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                                City
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded 
                            py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" 
                            placeholder="Albuquerque"/>
                        </div>
                            <div ></div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                Zip
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded 
                            py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
                        </div>

                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                Zip
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded 
                            py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                                City
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 
                            rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"/>
                        </div>
                            <div ></div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                Zip
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 
                            rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
                        </div>

                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                Zip
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 
                            rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="number" placeholder="en £"/>
                        </div>
                    </div>
                </form>
                <br/>
                <table className="table-fixed">
                <thead>
                    <tr>
                    <th className="w-1/2 px-4 py-2">date debut</th>
                    <th className="w-1/4 px-4 py-2">date retour</th>
                    <th className="w-1/4 px-4 py-2">category</th>
                    </tr>
                </thead>
                
                {this.props.tarif && this.props.tarif.date_debut}
                        <tbody>
                        <tr>
                            <td className="border px-4 py-2"></td>
                            <td className="border px-4 py-2">Adam</td>
                            <td className="border px-4 py-2">858</td>
                        </tr>
                        </tbody>
                        
                    
                {console.log(categories)}
                
                </table>
            </div>
        </div>
        )
    }
}

export default TarifPeronnaliser

 