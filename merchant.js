class Merchant {

    constructor(isAway, haveGold) {
        this.isAway = false;

        this.haveGold = 0;
    }

    get isAway() {
        return this.isAway;
    }

    get haveGold() {
        return this.haveGold;
    }

    sendAway() {
        this.isAway = true;
        this.haveGold = 20;

        let i = Math.random();

        if (i < 0.1) {
            console.log("Le marchand a été attaqué :(");
            this.haveGold = 0;

            returnm;
        }
        else if (i < 0.5) {
            console.log("Le marchand a perdu de l'argent");
            this.haveGold = 10;

            returnm;
        }
        else {
            console.log("Le marchand a gagné de l'argent :)");
            this.haveGold = 30;

            returnm;
        }
    }

    returnm() {
        this.isAway = false;

        this.haveGold = 0;
    }
}

module.exports = {Merchant};