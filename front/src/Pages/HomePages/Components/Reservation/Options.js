import React, { Component } from 'react';
import axios from 'axios'

export default class Options extends Component {
    state = {
		options: [],
		// options: []
	}

	componentDidMount() {
		this.getVoiture();
		// this.getOption();
	}


	getVoiture = () => {
        const id = this.props.id
		axios.get(`/voitures/${id}`).then(response => {
			if (response.status === 200) {
				this.setState({
					options: response.data

				})
				console.log(response.data)
			}
		})
	}

    render() {
        const {options}= this.state.options
        return (
            <div>
                bonjour
                {options && options.map(option =>
                  ( <> 
               <div>
                   {/* Condition checkbox et select */}
                   {((`${option.libelle}` === "Annulation covid") || (`${option.libelle}` === "GPS")) ?
                    (<input name="" type="checkbox" defaultValue="" />) : (
                    <select name="" type="checkbox" tabindex="-1">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>) }

                    <span className="Annulation">{option.libelle}: </span><span className="cout-2">{option.prix} €</span>
                </div>
                {/* <div className="contenue-1">

                    <select name="" type="checkbox" tabindex="-1">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>

                    <span className="conducteur">Conducteur additionnel  :</span><span className="gratuit">Gratuit</span>

                    <div className="ddOutOfVision" id="2-produit_61_msddHolder" >
                        <select name="" type="checkbox" tabindex="-1">
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                        <span className="Annulation">Siège bébé (de 0 à 3 ans)  : </span>
                        <span className="cout-1">9.00 €</span>
                    </div>
                    <div className="ddOutOfVision" id="3-produit_61_msddHolder" >
                        <select name="" type="checkbox" tabindex="-1">
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                        <span className="Annulation"> Réhausseur (à partir de 3 ans) : </span>
                        <span className="cout-2">9.00 €</span>
                    </div>
                    <input className="produit_opt optf#REF" id="4-produit_61" name="" type="checkbox" value="" />
                    <span className="Annulation">GPS : </span>
                    <span className="optionresult">27.00 €</span>
                </div> */}
                </>
                )
                )
                }
            </div>
        )
    }
}
