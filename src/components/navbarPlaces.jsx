import React from "react";
import "./navbar.css";

export const NavbarPlaces = ({ data }) => {
	const renderItem = (item, index) => {
		const parsedData = JSON.parse(item.tags);
		//console.log(parsedData, 'parsed')
		return (
			<div key={index} className="nav-item">
				<div className="item-name">{item.name}</div>
				<div>{item.subclass}</div>
				{item.street && <div>{`${item.street}, ${item.housenumber}`}</div>}
				<div>{parsedData.opening_hours}</div>
			</div>
		);
	};

	return (
		<div className="navbarPlaces">
			{data?.map((item, index) => renderItem(item, index))}
		</div>
	);
};
