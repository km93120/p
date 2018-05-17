class Dieu {
	constructor(isPleased) {
		this.isPleased = 2;
	}

	get isPlease() {
		return this.isPleased;
	}

	set isPleased(ispleased) {
		this._isPleased = ispleased;
	}

	pleaseGod() {
		this.isPleased += 1;
	}

	displeaseGod() {
		this.isPleased -= 1;
	}
}

module.exports = {Dieu};
