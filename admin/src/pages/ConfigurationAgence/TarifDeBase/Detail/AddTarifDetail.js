import React, { Component } from 'react'
import axios from '../../../../axios';

export default class AddTarifDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tarifDetails: []
        }
        this.getTarifDetails = this.getTarifDetails.bind(this);
        this.createTarifDetail = this.createTarifDetail.bind(this);
    }

    componentDidMount() {
        this.getTarifDetails()
    }

    getTarifDetails() {
        axios.get('/tarifDetails').then(response => {
            if (response.status === 200) {
                this.setState({
                    tarifDetails: response.data
                })
            }
        }
    }

    createTarifDetail(tarifDetail) {
        const tarifsDetails = [tarifDetail, ...this.state.tarifDetail]
        this.setState({ tarifDetails })
    }

    render() {
        return (
            <div>

            </div >
        )
    }
}
