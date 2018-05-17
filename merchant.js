class Merchant {
	constructor(isAway, haveGold) {
		this.isAway = false;
		this.haveGold = 0;
	}

	get isAwa() {
		return this.isAway;
	}

	get haveGol() {
		return this.haveGold;
	}

	set isAway(isaway) {
		this._isAway = isaway;
	}

	set haveGold(havegold) {
		this._haveGold = havegold;
	}

	sendAway() {
		this.isAway = true;
		this.haveGold = 20;

		const i = Math.random();

		if (i < 0.1) {
			console.log('Le marchand a été attaqué :(');
			this.haveGold = 0;
			retour();
		} else if (i < 0.5) {
			console.log('Le marchand a perdu votre argent');
			this.haveGold = 10;

			retour();
		} else {
			console.log('Le marchand a gagné de l\'argent :)');
			this.haveGold = 30;
			retour();
		}
	}

	bla() {
		this.isAway = false;
		this.haveGold = 0;
	}
}

module.exports = {Merchant};
