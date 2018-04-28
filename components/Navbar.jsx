import React from 'react';
import { Link } from 'react-router-dom';

// TODO: add an index route to navbar [left icon]

export default function Navbar() {
	return (
		<nav>
			<div className="nav-right">
				<Link className="nav-item" to="/about">about me</Link>
				<Link className="nav-item" to="/projects">projects</Link>
				<Link className="nav-item" to="/resume">resume</Link>
				<Link className="nav-item" to="/contact">reach out</Link>
			</div>
		</nav>
	);
}
