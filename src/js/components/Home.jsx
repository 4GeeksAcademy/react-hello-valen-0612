import React from "react";

//include images into your bundle

import Navbar from "./navbar.jsx";
import { JumboTron } from "./JumboTron.jsx";
import { Card } from "./Card.jsx";
import { Footer } from "./Footer.jsx";
import vinilo1 from "../../img/vinilo1.jpg";
import vinilo2 from "../../img/vinilo2.jpg";
import vinilo3 from "../../img/vinilo3.jpg";
import vinilo4 from "../../img/vinilo4.jpg";

//create your first component
const Home = () => {

	return (

		<div>
			<Navbar />
			<div className="container ">
				<JumboTron />

				<div className="container">
                <div className="row">
                 <div className="col-sm-12 col-md-6 col-lg-3 mb-4">

					<Card
						title="Vinilo1"
						imagen={vinilo1}
						text="Descripcion vinilo 1"
					/>
                </div>

				<div className="col-sm-12 col-md-6 col-lg-3 mb-4">
					<Card
						title="Vinilo2"
						imagen={vinilo2}
						text="Descripcion vinilo 2"
					/>
                </div>

				<div className="col-sm-12 col-md-6 col-lg-3 mb-4">
					<Card
						title="Vinilo3"
						imagen={vinilo3}
						text="Descripcion vinilo 3"
					/>
				</div>	

                <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
					<Card
						title="Vinilo4"
						imagen={vinilo4}
						text="Descripcion vinilo 4"
					/>

				 </div>
					
				</div>
				</div>


					

			</div>
			<Footer />
		</div>

	);
};

export default Home;