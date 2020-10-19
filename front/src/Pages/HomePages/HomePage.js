import React from 'react';



import Slider from './Components/Slider/Slider.js';
import Search from './Components/Search/Search.js';
import Listin from './Listin.js';
import World from './Components/World/World.js';
import Welcome from './Components/Welcome/Welcome.js';
import HomeAuto from './Components/HomeAuto/HomeAuto.js';
import Home from './Components/HomeReviews/Home.js';
import Asks from './Components/Asks/Asks.js';

class HomePage extends React.Component {
	// state = {
	// 	etape: 1
	// }

	render() {
		// let EtapeBlock = null;

		// if (etape === 2) {
		// 	EtapeBlock === Listin
		// }
		return (
			<>
				<Slider />
		        <Search />
				{/* <EtapeBlock /> */}
		       <World />
			   <HomeAuto />
				 	{/*<Welcome />
				
				<Home />
				<Asks /> */}
			</>
		)
	}
}


export default HomePage;