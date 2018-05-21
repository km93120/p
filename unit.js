class Unit {
	constructor(isWounded, isDead) {
		this.isWounded_ = false;
		this.isDead_ = false;
	}

	init() {

	}

	get isWounded() {
		return this.isWounded;
	}

	get isDead() {
		return this.isDead;
	}
}

module.exports = {Unit};