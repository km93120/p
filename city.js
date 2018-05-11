const {Units} = require('../units');

class City
{

    constructor(corn,gaincorn,gold,gaingold)
    {
        this.corn = 100;
        this.gaincorn = 50;
        this.gold = 100;
        this.gaingold = 50;

        let unitsList = new Array(Math.random()*1000);

        for(let i = 0; i < unitsList.length(); i++)
        {
            unitsList[i] = new Units(false,false);
        }


    }

    get corn()
    {
        return this.corn_;
    }

    get gaincorn()
    {
        return this.gaincorn_;
    }

    get gold()
    {
        return this.gold_;
    }

    get gaingold()
    {
        return this.gaingold_;
    }

    get unitsList()
    {
        return this.unitsList_;
    }


}
