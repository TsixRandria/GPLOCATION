import React, { Component } from 'react';

import { Formik, Form, Field } from 'formik';
import axios from '../../../../axios';

export default class TarifForm extends Component {
    render() {
        return (
            <div>
                <Formik
                    initialValues={{
                        duree: '',
                        prix: '',
                    }}

                    onSubmit={(values, { resetForm }) => {
                        const { match: { params } } = this.props
                        axios.post(`/tarifs/${params.id}/tarif_details`, values).then(response => {
                            if (response.status === 201) {

                                console.log(values);

                            }
                        })
                    }}
                >

                    <Form>
                        <div className="flex">
                            <label className="w-12">
                                Tarif &nbsp; <Field
                                    name="duree"
                                /> Jour
                            </label> &nbsp;
                            <label className="w-16">
                                <Field
                                    name="prix"
                                /> £/j
                            </label>

                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="text-white px-4 py-2 bg-blue-500 hover:bg-blue-400">Sauvegarder</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        )
    }
}
