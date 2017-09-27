'use strict';

import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';

const App = ({ children }) => (
	<Navbar />
);


// or move BrowserRouter into App and then just render App???
// eventually replace index route / App with Landing component?
render(
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App} />
		</Switch>
	</BrowserRouter>,
	document.getElementById('app')
);
