var tour = 0;

const {City} = require('../city');
const {Merchant} = require('../merchant');

city1 = new City;
city2 = new City;
city3 = new City;
city4 = new City;

Ourcity = new City;
OurMerchant = new merchant;

for (tour = 0; tpur < 20; tour ++)
{
    let evenement = Math.random();

    if (i < 0.1) {
        console.log("Vous avez une famine et vos mines se sont effondré ^^");
        Ourcity.gold = Ourcity.gold - 50;
        Ourcity.corn = Ourcity.corn - 50;
    }
    else if (i < 0.2 && i > 0.1) {
        console.log("Vous avez une famine");
        Ourcity.corn = Ourcity.corn - 50;
    }
    else if (i < 0.3 && i > 0.2) {
        console.log("vos mines se sont effondré");
        Ourcity.gold = Ourcity.gold - 50;
    }

    var choix = prompt("Que voulez vous faire ? 1 pour augmenter la taille des champs (50 gold), 2 pour augmenter la taille des mines (50 corn), 3 pour creer une unité (25 gold et 25 corn), 4 pour envoyer un marchand");

    if(choix == 1)
    {
        Ourcity.gold = Ourcity.gold - 50;
        Ourcity.gaincorn = Ourcity.gaincorn + 25;
    }
    else if(choix == 2)
    {
        Ourcity.corn = Ourcity.corn - 50;
        Ourcity.gaingold = Ourcity.gaingold + 25;
    }
    else if(choix == 3)
    {
        Ourcity.gold = Ourcity.gold - 25;
        Ourcity.corn = Ourcity.corn - 25;
    }
    else if(choix == 4)
    {
        Ourcity.gold = Ourcity.gold - 20;
        OurMerchant.sendAway();
    }



    Ourcity.gold = Ourcity.gold + Ourcity.gaingold;
    Ourcity.corn = Ourcity.corn + Ourcity.gaincorn;


}
