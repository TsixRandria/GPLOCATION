import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik';
import axios from '../../../axios';


class AddTarifDetail extends Component {
    render() {
        return (
            <div>

                <Formik
                    initialValues={{
                        prix: ''
                    }}

                    onSubmit={(values, { resetForm }) => {
                        axios.post('/tarif_details', values).then(response => {
                            if (response.status === 201) {
                                resetForm();
                                console.log(values);

                            }
                        })
                    }}
                >
                    <Form>
                        <label>
                            prix :
                        </label>
                        <Field name="prix" />
                        <div className="flex justify-end">
                            <button type="submit" className="text-white px-4 py-2 bg-blue-500 hover:bg-blue-400">Sauvegarder</button>
                        </div>
                    </Form>
                </Formik>

            </div>
        )
    }
}

export default AddTarifDetail
