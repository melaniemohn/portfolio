import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// make a form here... instead of email, eventually store the info? graphql?
// which is why it'll be helpful to have this as a Component, even though it could be (for now) a pure function

export default class Contact extends Component {
	render() {
		return (
			<div>
				<h2>Get in touch.</h2>
				<p>Reach out to discuss a project, dissect a hot take, or just to say hello!</p>
				<div className="form-container">
					<form action="https://formspree.io/melaniemohn@gmail.com" method="POST">
					    <div className="form-half-width">
						    <label>name</label>
						    <input type="text" name="name" className="input-small" />
						  </div>
						  <div className="form-half-width">
						    <label>email</label>
						    <input type="email" name="_replyto" className="input-small" />
					    </div>
					    <div className="form-full-width">
						    <label>message</label>
						    <textarea placeholder="Hello!" name="message" className="input-med" />
					    </div>
					    <button type="submit">Send</button>
					</form>
				</div>
				<br/>
				<Link to="/">Back to main page.</Link>
			</div>
		);
	}
}
