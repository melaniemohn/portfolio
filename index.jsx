'use strict';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import About from './components/About';
// import Contact from './components/Contact';
import Landing from './components/Landing';
import Projects from './components/Projects';
// import NotFound from './components/NotFound';

// const App = ({ children }) => (
// 	<Navbar />
// );

// add Google Analytics here, and include below between Navbar and Switch?

/*
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
*/

// wrap function body in parens?
const App = () =>
	<Router>
		<div>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Landing} />
        <Route path="/projects" component={Projects} />
			</Switch>
			<Footer />
		</div>
	</Router>

render(<App />, document.getElementById('app'));
