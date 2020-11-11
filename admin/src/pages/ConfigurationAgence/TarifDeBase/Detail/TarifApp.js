import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

import TarifDetails from '././TarifDetails';
import TarifDetail from '././TarifDetail';
import TarifForm from '././TarifForm';

class TarifApp extends React.Component {
    constructor() {
        super()
        this.state = {
            tarifDetails: [],
        }
        this.getTarifDetails = this.getTarifDetails.bind(this);
        this.createTarifDetail = this.createTarifDetail.bind(this);
    }
    componentDidMount() {
        this.getTarifDetails()
    }
    getTarifDetails() {
        axios
            .get('/tarifs')
            .then(response => {

                const tarifDetails = response.data
                this.setState({ tarifDetails })
                this.setState({ isLoading: false })
            })

    }
    createTarifDetail(tarifDetail) {
        const tarifDetails = [tarifDetail, ...this.state.tarifDetails]
        this.setState({ tarifDetails })
    }


    render() {
        return (
            <>
                <TarifForm
                    createTodoItem={this.createTodoItem}
                    handleErrors={this.handleErrors}
                    clearErrors={this.clearErrors}
                />
                <TarifDetails>
                    {this.state.tarifDetails.map(tarifDetail => (
                        <TarifDetail
                            key={tarifDetail.id}
                            tarifDetail={TarifDetail}
                            getTarifDetails={this.getTarifDetails}

                        />
                    ))}
                </TarifDetails>
            </>
        )
    }

}

export default TarifApp;