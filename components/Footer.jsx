import React from 'react';
import { Link } from 'react-router-dom';
import Icons from '../icons.js';

const Footer = () =>
	<div className="footer-container">
		<div className="icons">
			{Icons.map((icon) =>
					<Link to={icon.url} key={icon}>
						<i className={icon.icon} />
					</Link>
			)}
		</div>
		<div>
			<footer>
				<p>Melanie Mohn<br/>© 2018</p>
			</footer>
		</div>
	</div>

export default Footer;
