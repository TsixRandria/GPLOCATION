import React, { Component } from 'react'
import axios from '../../../axios';

export class TarifList extends Component {
    
    state = {
        category: [],
        voiture: []
    }
 
    componentDidMount(props) {
        this.apiCategories();
        console.log(this.props)
	}
   
    apiCategories = () => {
        const id = this.props.category
		axios.get(`/categories/${id}}`).then(response => {
			if (response.status === 200) {
                
				this.setState({
                    category: response.data.category
                })

                this.setState({
                    voiture: response.data.voitures
				})
				console.log(response.data)
            }
            
        })
    };
    
    
    
    render(props) {
        console.log(this.state.voiture)
        const voiture = this.state.voiture
        return (
            <div>
                <h4> {this.state.category.category}</h4>
               
                
            </div>
        )
    }
}

export default TarifList
