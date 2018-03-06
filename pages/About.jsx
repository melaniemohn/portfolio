import React from 'react';
import { Link } from 'react-router-dom';

import Skills from '../components/Skills';

// MPM TODO: add a link to download resume (instead of navigating to page)
// include longer description of education, transition to GH, etc.
// add links to education, skills, projects sections?

export default function About() {
	return (
		<div>
			<h1>about me</h1>
			<p>Here's a placeholder for a longer "about me" section.</p>
			<Link to="/resume">Check out my resume</Link> or <Link to="/">go back to the main page.</Link>
			<Skills />
		</div>
	);
}
