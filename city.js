const {Units} = require('C:\\Users\\alexa\\WebstormProjects\\Projet\\units.js');

class City {
	constructor(corn, gaincorn, gold, gaingold, valeur_defense, valeur_attaque) {
		this.corn = 100;
		this.gaincorn = 50;
		this.gold = 100;
		this.gaingold = 50;
		this.valeur_defense = 50;
		this.valeur_attaque = 0;

		var unitsList = new Array(Math.floor(Math.random() * 1000));

		for (let i = 0; i < unitsList.length; i++) {
			unitsList[i] = new Units(false, false);
		}
	}

	get cor() {
		return this.corn;
	}

	get gaincor() {
		return this.gaincorn;
	}

	get gol() {
		return this.gold;
	}

	get gaingol() {
		return this.gaingold;
	}

	get unitsLis() {
		return this.unitsList;
	}

	get valeur_defens() {
		return this.valeur_defense;
	}

	get valeur_attaqu() {
		return this.valeur_attaque;
	}

	set corn(Corn) {
		this._corn = Corn;
	}

	set gaincorn(gainCorn) {
		this._gaincorn = gainCorn;
	}

	set gold(Gold) {
		this._gold = Gold;
	}

	set gaingold(gainGold) {
		this._gaingold = gainGold;
	}

	set valeur_defense(valeur_Defense) {
		this._valeur_defense = valeur_Defense;
	}

	set valeur_attaque(valeur_Attaque) {
		this._valeur_attaque = valeur_Attaque;
	}

	calculdefense() {
		for (let i = 0; i < unitsList.length; i++) {
			valeur_defense += 10;
		}
	}

	recrute() {
		var unit = new Units(false, false);
		this.unitsList.push(unit);
	}

	attaque(city) {
		if (this.unitsLis != null) {
			for (let i = 0; i < unitsList.length; i++) {
				valeur_defense -= 10;
				valeur_attaque += 10;
			}
		}

		if (this.valeur_attaque > city.valeur_defense) {
			console.log('vous avez envahi une ville');
			for (let i = 0; i < unitsList.length; i++) {
				let rand = 0;

				rand = Math.random();

				if (rand < 0.1) {
					unitsList[i].isDead = true;
				}
				else if (rand < 0.2 && rand > 0.1) {
					unitsList[i].isWounded = true;
				}
			}
		}
		else {
			console.log('vous avez été vaincu par une ville');
			for (let i = 0; i < unitsList.length; i++) {
				let rand = 0;

				rand = Math.random();

				if (rand < 0.3) {
					unitsList[i].isDead = true;
				}
				else if (rand < 0.6 && rand > 0.5) {
					unitsList[i].isWounded = true;
				}
			}
		}

	}

}

module.exports = {City};
