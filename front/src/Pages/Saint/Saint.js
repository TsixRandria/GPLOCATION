import React, { Component } from 'react'
import './Style.css';


import Pheader from './Components/Pheader.js';
import Bread from './Components/Bread.js';
import Best from './Components/Best'

import What from './Components/What.js';


class Saint extends Component {
    render() {
        return (
            <div>
                <Pheader />
                <Bread />
                <Best />
                <What />
                
            </div>
        )
    }
}
export default Saint;