class Merchant
{
    constructor()
    {
     this.isAway = false;

     this.haveGold = 0;
    }

    get isAway()
    {
        return this.isAway;
    }

    sendAway()
    {
        this.isAway = true;
        this.haveGold = 20;

        let i = Math.random();

        if(i < 0.1)
        {
            console.log("Le marchand a été attaqué :(");
            this.haveGold = 0;

            return();
        }
        else if(i < 0.5)
        {
            console.log("Le marchand a perdu de l'argent");
            this.haveGold = 10;

            return();
        }
        else
        {
            console.log("Le marchand a gagné de l'argent :)");
            this.haveGold = 30;

            return();
        }
    }

    return()
    {
        this.isAway = false;
        this.haveGold = 0;
    }


}

module.exports = {Merchant};