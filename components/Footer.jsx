import React from 'react';
import { Link } from 'react-router-dom';

// MPM: add angellist icon and link to icon list?
const Twitter = {url: 'https://www.twitter.com/melaniemohn', icon: 'fa fa-twitter'};
const GitHub = {url: 'https://github.com/melaniemohn', icon: 'fa fa-github'};
const LinkedIn = {url: 'https://www.linkedin.com/in/melanie-mohn', icon: 'fa fa-linkedin'};
const Mail = {url: 'mailto:melaniemohn@gmail.com?Subject=Hello', icon: 'fa fa-envelope-o'};

const Social = [Twitter, GitHub, LinkedIn, Mail];

const Footer = () =>
	<div className="footer-container">
		<div className="icons">
			{Social.map((network) =>
					<Link to={network.url} key={network}>
						<i className={network.icon}></i>
					</Link>
			)}
		</div>
		<div>
			<footer>
				<p>made with ♡ by Melanie Mohn, © 2017</p>
			</footer>
		</div>
	</div>

export default Footer;
