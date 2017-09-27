'use strict';

import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar';

const App = ({ children }) => (
	<div>
		<Navbar />
	</div>
);

// do Router stuff in the render function
// instead of having index route self-closing, nest child routes inside of it?

/* 	<Router history={browserHistory}>
		<Route path="/" component={App} />
	</Router>,
*/

render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('app')
);
