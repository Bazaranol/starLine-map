import React from "react";
import "./navbar.css";
import { PlaceButton } from "./placeButton";

export default function Navbar({ handlerClick }) {
	return (
		<div className="heading">
			<div className="heading-block">
				<PlaceButton
					text={"Кафе"}
					type={"cafe"}
					onClick={handlerClick}
				></PlaceButton>
				<PlaceButton
					text={"Аптека"}
					type={"pharmacy"}
					onClick={handlerClick}
				></PlaceButton>
			</div>
			<div className="heading-block">
				<PlaceButton
					text={"Банкомат"}
					type={"atm"}
					onClick={handlerClick}
				></PlaceButton>
				<PlaceButton
					text={"Магазин"}
					type={"shop"}
					onClick={handlerClick}
				></PlaceButton>
			</div>
			<div className="heading-block">
				<PlaceButton
					text={"Заправка"}
					type={"fuel"}
					onClick={handlerClick}
				></PlaceButton>
			</div>
		</div>
	);
}
