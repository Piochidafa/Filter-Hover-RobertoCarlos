import { useState } from "react";
import ines from "./assets/robertoCarlos.png";
import wast from "./assets/wasteGTAV.png";
import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="coisos">
				<div className="negocin">
					<img src={ines} alt="" />
				</div>
				<div className="negocin">
					<img src={ines} alt="" />
				</div>
				<div className="negocin">
					<img src={ines} alt="" />
				</div>
			</div>
			<img className="wast" src={wast} alt="" />
		</div>
	);
}

export default App;
