import React from "react";

export const PlaceButton = (props) => {
	const { text, type, onClick } = props;
	return <div onClick={() => onClick(type)}>{text}</div>;
};
