module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{txt,json,md,eot,svg,ttf,woff,woff2,gif,jpg,png}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};