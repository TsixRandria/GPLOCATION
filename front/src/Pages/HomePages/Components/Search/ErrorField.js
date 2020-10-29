import React, { Component } from 'react'
import './Error.css';
export default class ErrorField extends Component {
    render() {
        const { errors, touched, row } = this.props;
        return (
            <div className="error-field">
                { errors[row] && touched[row] ? (
                    <div><h6 className="erreur">{errors[row]}</h6></div>
                ) : null }
            </div>
        )
    }
}