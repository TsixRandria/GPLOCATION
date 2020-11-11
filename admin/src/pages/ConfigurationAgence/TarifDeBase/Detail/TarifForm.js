import React from 'react'

import axios from 'axios'

class TarifForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.dureeRef = React.createRef()
        this.prixRef = React.createRef()
    }

    handleSubmit(e) {
        e.preventDefault()
        axios
            .post('/tarif_details', {
                tarifDetails: {
                    duree: this.dureeRef.current.value,
                    prix: this.prixRef.current.value,
                },
            })
            .then(response => {
                const tarifDetail = response.data
                this.props.createTarifDetail(tarifDetail)
            })
        e.target.reset()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="my-3">
                <div className="form-row">
                    <div className="form-group col-md-8">
                        Tarif <input
                            name="duree"
                            ref={this.dureeRef}
                            required
                            className="form-control w-12    "
                        />
                        jour(s)
                    </div>
                    <div className="form-group col-md-8">
                        <input
                            name="prix"
                            ref={this.prixRef}
                            required
                            className="form-control w-16"
                        />
                        £/j
                    </div>
                    <div className="form-group col-md-4">
                        <button className="btn btn-outline-success btn-block">
                            Ajouter le tarif
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default TarifForm


