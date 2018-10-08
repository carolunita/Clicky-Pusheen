import React from "react";
import "./Card.css";

const Card = props => (
  	<div className="col-4 col-sm-4 col-md-3 col-lg-4 col-xl-3 ml-auto mr-auto box">
    	<div className="imgbox">
    		<img alt={props.name} src={props.image} id={props.id} onClick={props.handleOnClick} className="img-fluid"/>
    	</div>
  	</div>
);

export default Card;