import React from 'react'

class TarifDetails extends React.Component {
    constructor(props) {
        super(props)
        // this.handleClick = this.handleClick.bind(this)
    }

    render() {
        return (
            <>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Durées</th>
                                <th scope="col">Tarifs</th>
                                <th scope="col" className="text-right">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>{this.props.children}</tbody>
                    </table>
                </div>
            </>
        )
    }
}
export default TarifDetails


