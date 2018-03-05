import React from 'react';
import { Link } from 'react-router-dom';

// MPM TODO: add a list of skills etc. plus a link to download resume

export default function About() {
	return (
		<div>
			<h1>about</h1>
			<p>Here's a placeholder for a longer "about me" section.</p>
			<Link to="/resume">Check out my resume</Link> or <Link to="/">go back to the main page.</Link>
		</div>
	);
}
