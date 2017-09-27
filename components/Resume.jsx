import React from 'react';
import { Link } from 'react-router-dom';

export default function Resume() {
	return (
		<div>
			<embed className="resume" src="/Melanie-Mohn-resume.pdf" type="application/pdf" />
			<Link to="/">Back to main page.</Link>
		</div>
	);
}
