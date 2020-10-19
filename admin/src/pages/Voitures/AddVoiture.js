import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import ErrorField from '../../components/ErrorField/ErrorField';
import axios from '../../axios';
 
const VoitureSchema = Yup.object().shape({
    marque: Yup.string()
        .required('Le marque ne doit pas être vide'),
    model: Yup.string()
        .required('Le model ne doit pas être vide')
});
 
class AddVoiture extends Component {
    render() {

        return (
        <div>
            <h2>Insertion d'une nouvelle voiture</h2>
            <Formik
            initialValues={{
                marque: '',
                model: ''
            }}
            validationSchema={VoitureSchema}
            onSubmit={(values, { resetForm }) => {
                axios.post('/voitures', values).then(response => {
                    if (response.status === 201) {
                        resetForm();
                    }
                })
            }}
            >
            {({ errors, touched }) => (
                <Form>
                    <div className="mb-2">
                        <label className="block text-gray-500 font-bold mb-1 md:mb-0">
                            Marque
                        </label>
                        <Field 
                            name="marque"
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"/>
                        <ErrorField errors={errors} touched={touched} row="marque"/>
                    </div>
                    
                    <div className="mb-2">
                        <label className="block text-gray-500 font-bold mb-1 md:mb-0">
                            Model
                        </label>
                        <Field
                            name="model"
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"/>
                        <ErrorField errors={errors} touched={touched} row="model"/>
                    </div>
                    <button type="submit" className="text-white px-4 py-2 bg-blue-500 hover:bg-blue-400">Sauvegarder</button>
                </Form>
            )}
            </Formik>
        </div>)
    }
}

export default AddVoiture;