import React from 'react';
import './Card.css';
const Card = ({Time}) =>{
	return (
		<div className="Card ba b--transparent pa3 shadow-3 br3 ma4">{`${Time}`}</div>
	)
}
export default Card;