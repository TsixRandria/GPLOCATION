import React, { Component } from 'react';

import HeaderAeroport from './components/HeaderAeroport/HeaderAeroport';
import AboutAeroport from './components/AboutAeroport/AboutAeroport';
import OffreAeroport from './components/OffreAeroport/OffreAeroport';
import FooterAeroport from './components/FooterAeroport/FooterAeroport';


 class Aeroport extends Component {
    render() {
        return (

        	<>
        	<HeaderAeroport/>
        	<AboutAeroport/>
        	<OffreAeroport/>
        	<FooterAeroport/>
        	</>
        )
    }
}
export default Aeroport;