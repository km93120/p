const {Divinity} = require('./divinity');
const {Unit} = require('./unit.js');
const {Listunit} = require('./listunit.js');

class City {
	constructor(name, timeFactor) {
		this.citiname_ = name || 'The City';
		this.corn_ = 0;
		this.gold_ = 0;
		this.timeFactor_ = timeFactor || 10000;
		this.power_ = 50;
		this.Listunit_ = [Unit, Unit, Unit, Unit, Unit];
		this.divinity = new Divinity('bla', 1);
	}

	init() {
		this.divinity.worldEvents.on('favor', favor => {
			this.corn_ += favor.corn;
			this.gold_ += favor.gold;
		});
		this.divinity.worldEvents.on('blessing', blessing => {
			this.corn_ += blessing.corn;
			this.gold_ += blessing.gold;
		});
	}

	sendMerchant(merchandise) {
		return new Promise((resolve, reject) => {
			if (typeof merchandise === 'number') {
				setTimeout(() => {
					this.gold_ -= merchandise;
					this.tradeResult = City.trade_(merchandise);
					this.gold_ += this.tradeResult;
					resolve();
				}, 20 * this.timeFactor * Math.random());
			} else {
				reject(new Error(
					'Vous n\'avez rien donner au marchand'
				));
			}
		});
	}

	sendTroops(troops) {
		return new Promise((resolve, reject) => {
			if (typeof troops === 'number') {
				setTimeout(() => {
					this.power_ -= troops;
					this.gold_ -= 50;
					this.raidResult = City.raid_(troops);
					this.fightResult = City.fight_(troops);
					this.gold_ += this.raidResult;
					this.power_ += this.fightResult;
					resolve();
				}, 40 * this.timeFactor * Math.random());
			} else {
				reject(new Error(
					'Vous n\'avez rien donner au marchand'
				));
			}
		});
	}

	trainingTroops(salary) {
		return new Promise((resolve, reject) => {
			if (typeof salary === 'number') {
				setTimeout(() => {
					this.gold_ -= salary;
					this.trainResult = City.train_(salary);
					this.power_ += this.trainResult;
					resolve();
				}, 10 * this.timeFactor * Math.random());
			} else {
				reject(new Error(
					'Vous n\'avez rien donner au marchand'
				));
			}
		});
	}

	static trade_(x) {
		const i = Math.random();

		if (i < 0.1) {
			console.log('Le marchand a été attaqué :(');
			return 0;
		}
		if (i < 0.5) {
			console.log('Le marchand a gagné votre argent');
			return x * 1.2;
		}
	}

	static raid_(x) {
		const defense = Math.random() * 100;

		if (x > defense) {
			console.log('vous avez gagné');
			return 100;
		}
		if (x <= defense) {
			console.log('vous avez perdu');
			return 0;
		}
	}

	static fight_(x) {
		const i = Math.random();
		let l = 0;
		let survivant = 0;

		if (i > 0.5) {
			console.log('vous avez perdu des hommes');
			for (l = 0; l <= Listunit.length; l++) {
				const j = Math.random();
				if (j < 0.2) {
					Listunit[l].remote();
				} else {
					survivant = 5;
					x += survivant;
				}
			}
			return x;
		}
		if (i <= 0.5) {
			console.log('vous n\'avez rencontré perssonne');
			return x;
		}
	}

	static train_(x) {
		const incompetence = Math.random() * 100;

		if (x > incompetence) {
			console.log('vous avez recruté des troupes');
			const unit = new Unit(false, false);
			Listunit.recruter(unit);
			return 10;
		}
		if (x <= incompetence) {
			console.log('les hommes ont depensé votre argent dans les bars');
			return 0;
		}
	}

	get corn() {
		return this.corn_;
	}

	get gold() {
		return this.gold_;
	}

	get timeFactor() {
		return this.timeFactor_;
	}

	get name() {
		return this.citiname_;
	}

	get power() {
		let i = 0;
		for (i = 0; i <= Listunit_.size; i++) {
			power_ += 10;
		}
		return this.power_;
	}

	get listunit() {
		return this.Listunit_;
	}
}

module.exports = {City};
