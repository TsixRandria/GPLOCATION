import React from 'react';

import axios from 'axios'


class TarifDetail extends React.Component {
    constructor() {
        super()
        this.state = {
            complete: this.state.tarifDetail.complete,
        }
        this.handleDestroy = this.handleDestroy.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.updateTarifDetail = this.updateTarifDetail.bind(this)
        this.inputRef = React.createRef()
        this.completedRef = React.createRef()
        this.path = `/tarifs/${this.state.TarifDetail.id}`
    }
    handleChange() {
        this.setState({
            complete: this.completedRef.current.checked,
        })
        this.updateTarifDetail()
    }
    updateTarifDetail() {
        axios
            .put(this.path, {
                tarif_detail: {
                    duree: this.inputRef.current.value,
                    prix: this.inputRef.current.value,

                },
            })

    }

    handleDestroy() {

        axios
            .delete(this.path)
            .then(response => {
                this.state.getTarifDetails()
            })
            .catch(error => {
                console.log(error)
            })

    }
    render() {
        const { tarifDetail } = this.state
        return (
            <tr
                className={`${this.state.complete
                    ? `d-none`
                    : ''
                    } ${this.state.complete ? 'table-light' : ''}`}
            >
                <td>
                    <input
                        defaultValue={tarifDetail.duree}
                        disabled={this.state.complete}
                        onChange={this.handleChange}
                        ref={this.inputRef}
                        className="form-control"
                    />
                </td>
                <td>
                    <input
                        defaultValue={tarifDetail.prix}
                        disabled={this.state.complete}
                        onChange={this.handleChange}
                        ref={this.inputRef}
                        className="form-control"
                    />
                    <button
                        onClick={this.handleDestroy}
                        className="btn btn-outline-danger"
                    >
                        Delete
                    </button>
                </td>

            </tr>
        )
    }
}

export default TarifDetail

