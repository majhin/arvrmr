import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLottie } from "lottie-react";
import Bar from "../static/bar.json";
import "../static/pageB.css";

function PageB() {
	let currentMenu = 0;
	const frames = [
		[0, 1],
		[1, 10],
		[9, 20],
		[18, 28],
		[27, 37],
		[36, 46],
	];

	// Define options for Lottie
	const options = {
		animationData: Bar,
		loop: false,
		autoplay: false,
		initialSegment: [0, 1],
	};

	// Create a Lottie instance using useLottie
	const bar = useLottie(options);

	const handleNextMenu = () => {
		if (currentMenu <= 4) {
			currentMenu++;
			console.log(currentMenu);
			let segment = frames[currentMenu];
			console.log(segment);
			bar.playSegments([segment[0], segment[1]]);
		}
	};

	const handlePreviousMenu = () => {
		if (currentMenu > 0) {
			currentMenu--;
			console.log(currentMenu);
			if (currentMenu == 0) {
				bar.playSegments([10, 0]);
				return;
			}
			let segment = frames[currentMenu + 1];
			console.log(segment);
			bar.playSegments([segment[1], segment[0]]);
		}
	};

	return (
		<div className='container'>
			<Link to='/'>
				<button className='btn-secondary topRightButton'>Page A</button>
			</Link>
			<div className='content-container'>
				<div className='top-text'>
					<h1>Digital Interface</h1>
					<p>
						Choreograph every element of your shower experience with built-in
						WiFi, Bluetooth, and voice-activated technology when paired with
						Google Home<sup>TM</sup> or Amazon® Alexa®. Plus, use the DFC@Home
						<sup>TM</sup> app to craft up to twelve shower presets with spa
						options, remotely warm your steam shower and customize the
						interface.
					</p>
				</div>
			</div>
			<div className='button-container'>
				<button className='custom-button' onClick={handlePreviousMenu}>
					<img src='/leftarrow.png' alt='Left Button' className='button-img' />
				</button>
				{bar.View}
				<button className='custom-button' onClick={handleNextMenu}>
					<img
						src='/rightarrow.png'
						alt='Right Button'
						className='button-img'
					/>
				</button>
			</div>
		</div>
	);
}

export default PageB;
