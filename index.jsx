'use strict';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Landing from './pages/Landing';
import Projects from './pages/Projects';
import Resume from './components/Resume';
import NotFound from './pages/NotFound';

// const App = ({ children }) => (
// 	<Navbar />
// );

// add Google Analytics here, and include below between Navbar and Switch?

const App = () =>
	<Router>
		<div>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route path="/about" component={Landing} />
				<Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route component={NotFound} />
			</Switch>
			<Footer />
		</div>
	</Router>

render(<App />, document.getElementById('app'));
