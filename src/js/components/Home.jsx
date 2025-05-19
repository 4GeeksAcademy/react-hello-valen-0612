import React from "react";

//include images into your bundle

import Navbar from "./navbar.jsx";
import { JumboTron } from "./JumboTron.jsx";
import { Card } from "./Card.jsx";

//create your first component
const Home = () => {
	
	return (
		
		<div>
			<Navbar/>
		<div className="container">
			<JumboTron/>
			<Card/>
		</div>
		</div>

	
	);
};

export default Home;