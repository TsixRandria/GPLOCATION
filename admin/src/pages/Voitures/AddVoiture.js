import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
//import ImageUploader from 'react-images-upload';

import ErrorField from '../../components/ErrorField/ErrorField';
import axios from '../../axios';
//import Category from '../Category/Category';

const VoitureSchema = Yup.object().shape({
    // image: Yup.string()
    //     .required('L\'image ne doit pas être vide'),
    marque: Yup.string()
        .required('Le marque ne doit pas être vide'),
    model: Yup.string()
        .required('Le model ne doit pas être vide'),
    // places: Yup.string()
    //     .required('Le nombre de place ne doit pas être vide'),
    // type: Yup.string()
    //     .required('Le type ne doit pas être vide'),
    // climatisation: Yup.string()
    //     .required('La climatisation ne doit pas être vide'),
    // vitesse: Yup.string()
    //     .required('Le type de vitesse ne doit pas être vide'),
    // portes: Yup.string()
    //     .required('Le nombre de portes ne doit pas être vide')
});

class AddVoiture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //image: null,
            marque: '',
            model: ''
        }

    }

    // onChange = event => {
    //     this.setState({
    //         image: event.target.files[0],
    //         loaded: 0,
    //     })
    //     console.log(event.target.files[0])
    // }
    render() {
        return (
            <div>
                <Formik
                    initialValues={{
                        marque: '',
                        model: '',
                        // places: '',
                        // type: '',
                        // climatisation: '',
                        // vitesse: '',
                        // portes: ''

                    }}
                    validationSchema={VoitureSchema}
                    onSubmit={(values, { resetForm }) => {
                        // console.log(this.state.image)
                        // const formData = new FormData();
                        // formData.append('image', this.state.image)
                        // formData.append('marque', '')
                        // formData.append('model', '')
                        // // formData.append('places', '')
                        // formData.append('type', '')
                        // formData.append('climatisation', '')
                        // formData.append('vitesse', '')
                        // formData.append('portes', '')
                        axios.post('/voitures', values).then(response => {
                            const { action } = this.props;
                            if (response.status === 201) {
                                action.toggleModal(false);
                                resetForm();
                                action.getVoiture();
                            }
                        })

                        // axios.post('/category, values').then(response => {
                        //     if (response.status === 201) {
                        //         console.log(values);
                        //     }
                        // })
                    }
                    }
                >
                    {({ errors, touched }) => (
                        <Form
                            autoComplete="off">
                            <div className="flex">
                                {/* <div className="mb-2 mr-4">
                                    <label className="block text-gray-700 font-bold mb-1 md:mb-0">
                                        Image
                            </label>
                                    <Field
                                        type="file"
                                        onChange={this.onChange}
                                        name="image"
                                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                                    <ErrorField errors={errors} touched={touched} row="image" />
                                </div> */}
                                <div className="mb-2 mr-4">
                                    <label className="block text-gray-700 font-bold mb-1 md:mb-0">
                                        Marque
                            </label>
                                    <Field
                                        name="marque"
                                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                                    <ErrorField errors={errors} touched={touched} row="marque" />
                                </div>

                                <div className="mb-2">
                                    <label className="block text-gray-700 font-bold mb-1 md:mb-0">
                                        Model
                            </label>
                                    <Field
                                        name="model"
                                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                                    <ErrorField errors={errors} touched={touched} row="model" />
                                </div>

                            </div>
                            <hr className="my-4" />
                            <div className="flex justify-end">
                                <button type="submit" className="text-white px-4 py-2 bg-blue-500 hover:bg-blue-400">Sauvegarder</button>
                            </div>
                            {/* <div className="mb-2 mr-4">
                                <label className="block text-gray-700 font-bold mb-1 md:mb-0">
                                    Category :
                        </label>
                                <Field
                                    name="Categorie"
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                            </div> */}
                        </Form>
                    )}
                </Formik>
            </div >)
    }
}

export default AddVoiture;