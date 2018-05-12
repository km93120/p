class dieu {
    constructor(isPleased)
    {
        this.isPleased = 2;
    }

    get isPleased()
    {
        return this.isPleased;
    }

    PleaseGod() {
        this.isPleased = this.isPleased + 1;
    }

    DispleaseGod() {
        this.isPleased = this.isPleased - 1;
    }
}

module.exports = {Dieu};