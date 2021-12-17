import React from "react";
import "../css/Card.css";
import Icon from "../images/card-icon.svg";

const Card = () => {
	return (
		<div className='card'>
			<div className='card-temp'>24 &deg;</div>
			<div className='card-icon'>
				<img src={Icon} />
			</div>
			<div className='card-day'>Fri</div>
		</div>
	);
};

export default Card;
