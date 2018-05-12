var tour = 0;

const {City} = require('../city');
const {merchant} = require('../merchant');
const {dieu} = require('../dieu');

city1 = new City;
city2 = new City;
city3 = new City;
city4 = new City;

Ourcity = new City;
OurMerchant = new merchant;
OurGod = new dieu;



for (tour = 0; tour < 20; tour ++)
{
    let evenement = Math.random();

    if(OurGod.isPleased = 1)
    {
        evenement = evenement - 0.1;
    }
    else if(OurGod.isPleased = 0)
    {
        evenement = evenement - 0.5;
    }
    else if(OurGod.isPleased = 3)
    {
        evenement = evenement + 0.1;
    }
    else if(OurGod.isPleased = 4)
    {
        evenement = evenement + 0.5;
    }


    if (evenement < 0.1) {
        console.log("Vous avez une famine et vos mines se sont effondré ^^");
        Ourcity.gold = Ourcity.gold - 50;
        Ourcity.corn = Ourcity.corn - 50;
    }
    else if (evenement < 0.2 && i > 0.1) {
        console.log("Vous avez une famine");
        Ourcity.corn = Ourcity.corn - 50;
    }
    else if (evenement < 0.3 && i > 0.2) {
        console.log("vos mines se sont effondré");
        Ourcity.gold = Ourcity.gold - 50;
    }
    else if (evenement > 0.9) {
        console.log("votre dieu vous donne de bonne recolte");
        Ourcity.corn = Ourcity.corn + 50;
    }

    OurGod.DispleaseGod;

    var choix = prompt("Que voulez vous faire ? 1 pour augmenter la taille des champs (50 gold), 2 pour augmenter la taille des mines (50 corn), 3 pour creer une unité (25 gold et 25 corn), 4 pour envoyer un marchand" +
        ", 5 pour sacrifier à dieu, 6 pour demander une faveur à dieu");

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
    else if(choix == 5)
    {
        Ourcity.gold = Ourcity.gold - 20;
        Ourcity.corn = Ourcity.corn - 20;
        OurGod.PleaseGod;
    }
    else if(choix == 6)
    {
        Ourcity.gold = Ourcity.gold + 20;
        Ourcity.corn = Ourcity.corn + 20;
        OurGod.DispleaseGod;
    }



    Ourcity.gold = Ourcity.gold + Ourcity.gaingold;
    Ourcity.corn = Ourcity.corn + Ourcity.gaincorn;


}
