import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik';
import axios from '../../../axios';


class AddTarif extends Component {
    render() {
        return (
            <div>

                <Formik
                    initialValues={{
                        prix: ''
                    }}

                    onSubmit={(values, { resetForm }) => {
                        axios.post('/tarifs', values).then(response => {
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
                <table className="table-fixed">
                <thead>
                    <tr>
                    <th className="w-1/2 px-4 py-2">Title</th>
                    <th className="w-1/4 px-4 py-2">Author</th>
                    <th className="w-1/4 px-4 py-2">Views</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="border px-4 py-2">Intro to CSS</td>
                    <td className="border px-4 py-2">Adam</td>
                    <td className="border px-4 py-2">858</td>
                    </tr>
                    <tr className="bg-gray-100">
                    <td className="border px-4 py-2">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
                    <td className="border px-4 py-2">Adam</td>
                    <td className="border px-4 py-2">112</td>
                    </tr>
                    <tr>
                    <td className="border px-4 py-2">Intro to JavaScript</td>
                    <td className="border px-4 py-2">Chris</td>
                    <td className="border px-4 py-2">1,280</td>
                    </tr>
                </tbody>
                </table>
                <div className="inline-flex">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                    Prev
                </button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                    Next
                </button>
                </div>

            </div>
        )
    }
}

export default AddTarif
