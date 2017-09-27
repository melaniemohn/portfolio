import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () =>
	<div className="main">
		<h1>Hello, world. <emphasis>I'm Melanie.</emphasis></h1>
		<div id="about-me-container">
			<img id="profile-image" src="images/me-center.jpg" alt="This is me!" />
			<div>
				<p>I’m a Brooklyn-based software engineer and recent graduate of the <a href="https://www.gracehopper.com/">Grace Hopper Program</a>.</p>
				<p>Before learning to code, I wrote literary criticism and taught English at <a href="https://www.princeton.edu/">Princeton</a>. The common theme? I’ve been plagued by syntax errors for the better part of a decade.</p>
				<p>When I’m not writing code or playing with web design, you can find me reading and painting.</p>
			</div>
		</div>
	</div>

export default Landing;
