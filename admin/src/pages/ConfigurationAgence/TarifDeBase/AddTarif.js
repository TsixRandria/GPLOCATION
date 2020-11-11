import React, { Component } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import ErrorField from '../../../components/ErrorField/ErrorField';
import axios from '../../../axios';


const TarifSchema = Yup.object().shape({
    date_debut: Yup.string()
        .required('Veuillez choisir une date'),
    date_fin: Yup.string()
        .required('Veuillez choisir une date'),
});


class AddTarif extends Component {
    componentDidMount() {
        axios.get('/categories').then(response => {
            if (response.status === 200) {
                this.setState({
                    categories: response.data
                })
            }
        })
    }

    state = {
        categories: []
    }
    render() {
        const { categories } = this.state;
        console.log(this.props, categories)
        return (
            <div>
                <h1 className="text-center">GESTION DE TARIF DE BASE</h1>

                <Formik
                    initialValues={{
                        date_debut: '',
                        date_fin: '',
                        duree: '',
                        prix: '',
                        categories: null
                    }}
                    validationSchema={TarifSchema}
                    onSubmit={(values, { resetForm }) => {
                        axios.post('/tarifs', values).then(response => {
                            const { action } = this.props;
                            if (response.status === 201) {
                                action.toggleModal(false);
                                resetForm();
                                action.getTarif();
                            }
                        })
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="flex text-center mb-6">
                                <div>
                                    <p className="block text-gray-700 font-bold mb-1 md:mb-0 w-1/2">Du</p>
                                    <Field type="date" className="select_field" name="date_debut" />&nbsp;
                                    <ErrorField errors={errors} touched={touched} row="date_debut" />
                                </div>

                                <div>
                                    <p className="block text-gray-700 font-bold mb-1 md:mb-0 w-1/2">Au</p>
                                    <Field type="date" className="select_field" name="date_fin" />
                                    <ErrorField errors={errors} touched={touched} row="date_fin" />
                                </div>
                            </div>

                            <div className="mb-2 mr-4 flex">
                                <label className="block text-gray-700 font-bold mb-1 md:mb-0 w-1/2">
                                    Tarif
                                            <Field
                                        name="duree"
                                        className="text-center bg-gray-200 appearance-none border-2 border-gray-200 rounded w-12 py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" /> jour(s)

                                </label> &nbsp; &nbsp;

                                <label className="block text-gray-700 font-bold mb-1 md:mb-0 w-1/2">
                                    Montant:
                                            <Field
                                        name="prix"
                                        className="text-center bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" /> £/j

                                </label>

                            </div>
                            <div className="mb-2 ">
                                <label className="block text-gray-700 font-bold mb-1 md:mb-0">
                                    Catégorie
                                    </label>
                                <Field as="select" name="category">
                                    <option value="null">--</option>
                                    {categories && categories.map(category => {

                                        return (<option Value={category.id}>{category.category}</option>)
                                    })}
                                </Field>
                            </div>

                            <div className="flex justify-end">
                                <button type="submit" className="text-white px-4 py-2 bg-blue-500 hover:bg-blue-400">Sauvegarder</button>
                            </div>

                        </Form>)}
                </Formik>
            </div>
        )
    }
}

export default AddTarif;
