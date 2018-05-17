let tour = 0;
let i = 1;

const prompt = require('prompt');
// Const window = require('window');

const {City} = require('C:\\Users\\alexa\\WebstormProjects\\Projet\\city.js');
const {Merchant} = require('C:\\Users\\alexa\\WebstormProjects\\Projet\\merchant.js');
const {Dieu} = require('C:\\Users\\alexa\\WebstormProjects\\Projet\\dieu.js');
const {Units} = require('C:\\Users\\alexa\\WebstormProjects\\Projet\\units.js');

/*  City1 = new City(100, 50, 100, 50);
city2 = new City(100, 50, 100, 50);
city3 = new City(100, 50, 100, 50);
city4 = new City(100, 50, 100, 50); */

const Ourcity = new City(100, 50, 100, 50);
const OurMerchant = new Merchant();
const OurGod = new Dieu();

/*const unit = new Units(false, false);
Ourcity.unitsLis.push(unit);
*/

do {
	for (tour = 0; tour < 20; tour++) {
		let evenement = Math.random();

		if (OurGod.isPleased === 1) {
			evenement -= 0.1;
		} else if (OurGod.isPleased === 0) {
			evenement -= 0.5;
		} else if (OurGod.isPleased === 3) {
			evenement += 0.1;
		} else if (OurGod.isPleased === 4) {
			evenement += 0.5;
		}

		if (evenement < 0.1) {
			console.log('Vous avez une famine et vos mines se sont effondré ^^');
			Ourcity.gold -= 50;
			Ourcity.corn -= 50;
		} else if (evenement < 0.2 && evenement > 0.1) {
			console.log('Vous avez une famine');
			Ourcity.corn -= 50;
		} else if (evenement < 0.3 && evenement > 0.2) {
			console.log('vos mines se sont effondré');
			Ourcity.gold -= 50;
		} else if (evenement > 0.9) {
			console.log('votre dieu vous donne de bonne recolte');
			Ourcity.corn += 50;
		}
			OurGod.displeaseGod();

			var choix = prompt('Que voulez vous faire ? 0 pour passer le tour, 1 pour augmenter la taille des champs (50 gold),' +
				' 2 pour augmenter la taille des mines (50 corn), 3 pour creer une unité (25 gold et 25 corn), 4 pour envoyer un marchand,' +
				' 5 pour sacrifier à dieu, 6 pour demander une faveur à dieu', '');

			while (choix !== 0) {
				if (choix === 1) {
					Ourcity.gold -= 50;
					Ourcity.gaincorn += 25;
				} else if (choix === 2) {
					Ourcity.corn -= 50;
					Ourcity.gaingold += 25;
				} else if (choix === 3) {
					Ourcity.gold -= 25;
					Ourcity.corn -= 25;
					Ourcity.recrute();
				} else if (choix === 4) {
					Ourcity.gold -= 20;
					OurMerchant.sendAway();
				} else if (choix === 5) {
					Ourcity.gold -= 20;
					Ourcity.corn -= 20;
					OurGod.pleaseGod();
				} else if (choix === 6) {
					Ourcity.gold += 20;
					Ourcity.corn += 20;
					OurGod.displeaseGod();
				}

				choix = prompt('Que voulez vous faire ? 1 pour augmenter la taille des champs (50 gold), 2 pour augmenter la taille des mines (50 corn), 3 pour creer une unité (25 gold et 25 corn), 4 pour envoyer un marchand,' +
					' 5 pour sacrifier à dieu, 6 pour demander une faveur à dieu', '');
			}

			Ourcity.gold += Ourcity.gaingold;
			Ourcity.corn += Ourcity.gaincorn;
		}

} while(OurGod.isPleased != 0);

if (OurGod.isPleased === 0) {
	console.log('Game Over');
}

