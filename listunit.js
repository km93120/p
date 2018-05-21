const {Unit} = require('./unit.js');

class Listunit {
	constructor() {

	}

	recruter(unit) {
		return new Promise((resolve, reject) => {
			if (typeof unit === Unit) {
				Listunit.push(unit);
				resolve();
			} else {
				reject(new Error(
					'Vous n\'etes pas un homme !'
				));
			}
		});
	}
}

module.exports(Listunit);
