import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik';
import axios from '../../../../axios';

// const TarifDetailSchema = Yup.object().shape({
//     prix: Yup.string()
//         .required('Veuillez entrer le prix')
// });

class AddTarifDetail extends Component {
    render() {
        return (
            <div>

                <Formik
                    initialValues={{
                        duree: '',
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
                        <div className="flex">
                            <label>
                                Tarif &nbsp; <Field
                                    name="duree"
                                /> Jour
                            </label> &nbsp;
                            <label>
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

export default AddTarifDetail
