import React, { Component } from 'react';

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
					    <div className="form-small">
						    <label>name:</label>
						    <input type="text" name="name" />
						  </div>
						  <div className="form-small">
						    <label>e-mail:</label>
						    <input type="email" name="_replyto" />
					    </div>
					    <div className="form-med">
						    <label>message:</label>
						    <input type="text" name="message" />
					    </div>
					    <button type="submit">Send</button>
					</form>
				</div>
			</div>
		);
	}
}
