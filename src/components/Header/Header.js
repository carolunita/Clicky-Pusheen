import React from "react";
import "./Header.css";

const Header = props => (
	<div className="header">
		<h1>Clicky Pusheen</h1>
		<div className="spacer"></div>
		<h3>Instructions</h3>
		<p>Click on any Pusheen to begin the game and to earn points, there are 12 different Pusheens to click on but be Careful... Clicking on the same Pusheen twice will end the Game!</p>

		<div className="spacer"></div>
	  	<h2 className="emphasis">{props.message}</h2>

	  	<div className="spacer"></div>
	  	<h4><b>Current Score:</b> {props.score}</h4>
	  	<h4><b>Top Score:</b> {props.topscore}</h4>
  	</div>
);

export default Header;