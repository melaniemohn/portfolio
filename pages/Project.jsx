import React from 'react';
import { Link } from 'react-router-dom';

// Project component will receive project object (name, description, images, etc.?) as props?
export default function Project() {
	return (
		<div>
			<p>Here's a placeholder for a page about a single project?</p>
			<Link to="/projects">See all projects.</Link>
			<Link to="/">Back to main page.</Link>
		</div>
	);
}
