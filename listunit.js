const {Unit} = require('./unit.js');

class Listunit {
	recruter(unit) {
		return new Promise((resolve, reject) => {
			if (typeof unit === Unit) {
				Listunit.push(unit);
				resolve();
			} else {
				reject(new Error(
					'Vous n\'etes pas un homme, vous etes un reptilien !'
				));
			}
		});
	}
}

module.exports(Listunit);
