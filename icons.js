// MPM: add angellist icon and link to icon list?
// make this into a json file and just export the object? or easier to have as an array?

const GitHub = {id: 'github', url: 'https://github.com/melaniemohn', icon: 'fa fa-github', style: {color: '#333'}};
const Twitter = {id: 'twitter', url: 'https://www.twitter.com/melaniemohn', icon: 'fa fa-twitter-square', style: {color: '#55acee'}};
const LinkedIn = {id: 'linkedin', url: 'https://www.linkedin.com/in/melanie-mohn', icon: 'fa fa-linkedin-square', style: {color: '#0976b4'}};
const Mail = {id: 'mail', url: 'mailto:melaniemohn@gmail.com?Subject=Hello', icon: 'fa fa-envelope-square', style: {color: '#dd4b39'}};

const Icons = [GitHub, Twitter, LinkedIn, Mail];

module.exports = Icons;
