import React from 'react';

// divide skills into front-end, back-end, and other?
// move list of skills to another separate content file?

export default function Skills() {
	return (
		<div className="skills-container">
			<h2>Skills</h2>
			<p>My focus has been writing JavaScript across the stack. My priorities are clean and performant code, but I also love to experiment. I'm always eager to try new flavors of JavaScript (read: front-end frameworks), but I'm also eager to learn new back-end languages, too.</p>

			<h3>Front-end tools</h3>
			<ul className = "skills-list">
				<li>JavaScript</li>
				<li>HTML5</li>
				<li>CSS3</li>
				<li>Sass</li>
				<li>jQuery</li>
			</ul>

			<h3>Libraries and frameworks</h3>
			<ul className = "skills-list">
				<li>React</li>
				<li>Redux</li>
				<li>D3.js</li>
				<li>Bootstrap</li>
				<li>Material UI</li>
			</ul>

			<h3>Back-end</h3>
			<ul className = "skills-list">
				<li>Node.js</li>
				<li>Express</li>
				<li>SQL (MySQL, PostgreSQL)</li>
				<li>Sequelize</li>
				<li>Firebase</li>
				<li>OrientDB</li>
				<li>Java</li>
			</ul>

			<h3>Development practices</h3>
			<ul className = "skills-list">
				<li>Git</li>
				<li>Jira</li>
				<li>Agile</li>
				<li>Test-driven development</li>
				<li>Cucumber</li>
				<li>Selenium</li>
			</ul>

		</div>
	);
}
