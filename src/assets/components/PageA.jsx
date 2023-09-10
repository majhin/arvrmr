import React, { useEffect, useState } from "react";
import "../static/circle.css";
import { Link } from "react-router-dom";

function PageA() {
	function rollTheDrums() {
		document.getElementById("circle1").classList.add("circle1");
		document.getElementById("circle2").classList.add("circle2");
		document.getElementById("circle3").classList.add("circle3");
		setInterval(() => {
			document.getElementById("circle1").classList.remove("circle1");
			document.getElementById("circle2").classList.remove("circle2");
			document.getElementById("circle3").classList.remove("circle3");
			setTimeout(() => {
				document.getElementById("circle1").classList.add("circle1");
				document.getElementById("circle2").classList.add("circle2");
				document.getElementById("circle3").classList.add("circle3");
			}, 300);
		}, 8200);
	}
	useEffect(() => {
		rollTheDrums();
	}, []);

	return (
		<div className='container'>
			<Link to='/pageB'>
				<button className='btn-secondary topRightButton'>Page B</button>
			</Link>
			<video
				autoPlay
				loop
				muted
				src='/loadingsteam.mp4'
				type='video/mp4'
			></video>
			<div className='breath-animation'>
				<div className='circle' id='circle1'>
					<div className='circle-text' id='circle1Text'></div>
				</div>
				<div className='circle' id='circle2'></div>
				<div className='circle' id='circle3'></div>
			</div>
		</div>
	);
}

export default PageA;
