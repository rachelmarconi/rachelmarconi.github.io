import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function tick() {
	const element = (
		<div>
			<h2>Hello!</h2>
			<h3>It is {new Date().toLocalTimeString()}!</h3>
		</div>
	);
	
	ReactDOM.render(element, document.querySelector('.datacard'));
}

setInterval(tick,1000);