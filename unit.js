class Unit {
	constructor(isWounded, isDead) {
		this.isWounded_ = isWounded;
		this.isDead_ = isDead;
	}

	init() {

	}

	get isWounded() {
		return this.isWounded_;
	}

	get isDead() {
		return this.isDead_;
	}
}

module.exports = {Unit};
