import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik';
import axios from '../../axios';


export class Category extends Component {
    render() {
        return (
            <div>
                <h1>category</h1>
                <Formik
                initialValues={{
                    categorie: ''
                }}
                onSubmit={(values, { resetForm }) => {
                    axios.post('/categories', values).then(response => {
                        
                        if (response.status === 201) {
                          
                            resetForm();
                            
                        }
                    })
                }}
                >
                    <Form>
                        <div className="mb-2 mr-4">
                            <label className="block text-gray-700 font-bold mb-1 md:mb-0">
                                Category :
                            </label>
                            <Field
                                name="Categorie"
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"/>
                        </div>
                    </Form>
                </Formik>
            </div>
        )
    }
}

export default Category;
