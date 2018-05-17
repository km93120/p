class Units {
	constructor(isDead, isWounded) {
		this.isDead = false;
		this.isWounded = false;
	}

	get isDea() {
		return this.isDead_;
	}

	get isWounde() {
		return this.isWounded_;
	}

	set isDead(Dead) {
		this._isDead = Dead;
	}

	set isWounded(Wounded) {
		this._isWounded = Wounded;
	}
}

module.exports = {Units};

