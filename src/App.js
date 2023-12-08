import React, { useEffect, useState } from "react";
import Map, { NavigationControl, Marker } from "react-map-gl";
import Navbar from "./components/navbar.js";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./App.css";
import typeRequest from "./clickHandler.js";
import { NavbarPlaces } from "./components/navbarPlaces";
function App() {
	const [data, setData] = useState([]);

	const handlerClick = async (type) => {
		const t = await typeRequest(type);
		setData(t);
	};
	//console.log(data, "data");

	return (
		<div className="App">
			<Navbar handlerClick={handlerClick} />
			<Map
				mapLib={maplibregl}
				initialViewState={{
					longitude: 30.3438091,
					latitude: 59.9324414,
					zoom: 11,
				}}
				style={{ width: "100%", height: " calc(100vh - 77px)" }}
				mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
			>
				<NavigationControl position="bottom-right" />
				<NavbarPlaces data={data} />
				{data.map((item) => (
					<Marker longitude={item.lon} latitude={item.lat} color="61dbfb" />
				))}
			</Map>
		</div>
	);
}

export default App;
