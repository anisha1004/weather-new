import React from "react";
import "../css/Weather.css";
import SearchIcon from "../images/searchIcon.svg";
import Icon from "../images/mid-icon.svg";
import Card from "../component/Card";

const Weather = () => {
	return (
		<div className='weather'>
			<div className='weather-left'>
				<div className='top'>
					<span>WEATHER APP</span>
					<span>BROWSE MAP</span>
				</div>
				<div className='middle'>
					<div className='search'>
						<input className='searchbar' />
						<i>
							<img src={SearchIcon} alt='search' />
						</i>
					</div>
					<div>
						<img src={Icon} className='icon' />
					</div>
					<div className='temp'>27&deg;</div>

					<div className='date'>14 June 2021</div>
					<div className='day-time'>
						<span>Thrusday | </span>
						<span>2:45AM</span>
					</div>
				</div>
				<div className='strip'></div>
				<div className='forecast'>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<div className='weather-right'>
				<div className='card-right'></div>
			</div>
		</div>
	);
};

export default Weather;
