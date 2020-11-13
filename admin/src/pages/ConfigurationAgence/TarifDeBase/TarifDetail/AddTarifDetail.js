import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik';
import axios from '../../../../axios';

import TarifForm from './TarifForm';
import Modal from 'react-modal';
// const TarifDetailSchema = Yup.object().shape({
//     prix: Yup.string()
//         .required('Veuillez entrer le prix')
// });

class AddTarifDetail extends Component {
    state = {
        addNewDetail: false,
        tarifDetails: []
    }

    // action = {
    //     toggleModal: (value) => {
    //         this.setState({ addNewDetail: value })
    //     },
    // }
    render() {
        // const { tarif, action } = this.props;
        const { addNewDetail, tarifDetails } = this.state;
        return (
            <div>
                <Modal
                    isOpen={addNewDetail}
                    className="modal-modern">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-title">
                                <h2>Insertion du nouveau détail du tarif</h2>
                            </div>
                            <div
                                onClick={() => this.setState({ addNewDetail: false })}
                                className="modal-close">X</div>
                        </div>
                        <hr className="my-4" />


                        <TarifForm
                            action={{ ...this.action }} />
                    </div>
                </Modal>

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

export default AddTarifDetail
