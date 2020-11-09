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
    render() {
        return (
            <div>
                <h1 className="text-center">GESTION DE TARIF DE BASE</h1>

                <Formik
                    initialValues={{
                        date_debut: '',
                        date_fin: ''
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
                            <div className="flex">
                                <div>
                                    <p>Du</p>
                                    <Field type="date" className="select_field" name="date_debut" />
                                    <ErrorField errors={errors} touched={touched} row="date_debut" />
                                </div>

                                <div>
                                    <p>Au</p>
                                    <Field type="date" className="select_field" name="date_fin" />
                                    <ErrorField errors={errors} touched={touched} row="date_fin" />
                                </div>

                                <div className="flex justify-end">
                                    <button type="submit" className="text-white px-4 py-2 bg-blue-500 hover:bg-blue-400">Sauvegarder</button>
                                </div>
                            </div>
                        </Form>)}
                </Formik>
            </div>
        )
    }
}

export default AddTarif;
