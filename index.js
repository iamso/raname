var fs = require('fs');

var words = JSON.parse(fs.readFileSync(__dirname + '/words.json', 'utf-8'));

function raname(separator) {
	var name = [
		words.verbs[Math.floor(Math.random() * words.verbs.length)],
		words.adjectives[Math.floor(Math.random() * words.adjectives.length)],
		words.nouns[Math.floor(Math.random() * words.nouns.length)],
		Math.floor(Math.random() * 999999 + 100000)
	];
	return separator !== []._ ? name.join(separator) : name;
}

raname.camel = function() {
	var name = this();
	return name[0] +
		name[1][0].toUpperCase() + name[1].slice(1) +
		name[2][0].toUpperCase() + name[2].slice(1) +
		name[3];
};

raname.dash = function() {
	return this('-');
};

module.exports = exports = raname;
