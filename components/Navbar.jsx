import React from 'react';
import { Link } from 'react-router-dom';

// TODO: add an index route to navbar [left icon]

export default function Navbar() {
	return (
		<nav>
			<ul className="nav-list">
				<li>
					<Link className="nav-item" to="/contact">reach out</Link>
				</li>
				<li>
					<Link className="nav-item" to="/resume">resume</Link>
				</li>
				<li>
					<Link className="nav-item" to="/projects">projects</Link>
				</li>
				<li>
					<Link className="nav-item" to="/about">about me</Link>
				</li>
			</ul>
		</nav>
	);
}
