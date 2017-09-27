// MPM: make this file local? just needs to be imported into Projects component??

// add images to each of these
// also, certain projects, like align and times two, will have "watch it in action"... link to youtube?

/* BASIC FORMAT
const PROJECT = {
	name: xxx,
	image: xxx,
	tagline: xxx,
	description: xxx,
	deployedUrl: xxx,
	github: xxx
}
*/

const align = {
	name: 'Align',
	deployedUrl: 'align.fun'
};

const timestwo = {
	name: 'Times Two'
};

const techtalk = {
	name: 'Tech Talk'
};

// const bitsbytes = {
// 	name: 'Bits & Bytes'
// };

const projects = [align, timestwo, techtalk, bitsbytes];

module.exports = {socialIcons, projects};
