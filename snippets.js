// thoughts on structure


// main.jsx
// including front-end routes
'use strict'
import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import { render } from 'react-dom';

// header and landing might be... the same thing
import AboutMe from './components/AboutMe';
import Card from './components/Card';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Project from './components/Project';

const App = ({ children }) =>
	<Navbar />

	render(
		<Router history={browserHistory}>
			<Route path='/' component={App}>
				<IndexRedirect to='timelines' />
				<Route path='/about-me' component={AboutMe} />
				<Route path='/:project' component={Project} /* project={??????} */ />
			</Route>
			<Route path='*' component={NotFound} />
		</Router>,
		document.getElementById('main')
	)


// on main page, under brief "about me,"
// loop over the array of projects
import {socialIcons, projects} from 'project-data';

projects.map((project, index) => {
	return <Card key={index} project={project} />
});

