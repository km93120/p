const {Divinity} = require('C:\\Users\\alexa\\WebstormProjects\\Projet\\app\\divinity.js');
const {City} = require('C:\\Users\\alexa\\WebstormProjects\\Projet\\app\\citi.js');

describe('Divinity', () => {
	let g;
	let c;
	before(() => {
		g = new Divinity('the best Gode', 1);
		c = new City('THE city', 1);
	});

	after(() => {
		g.endWorld();
	});

	it('should send a merchant', async () => {
		g.gold.should.be.equal(1000);

		await c.sendMerchant(100);
		g.gold.should.be.equal(1020);

		await c.sendMerchant(1000);
		g.gold.should.be.equal(1200);

		await c.sendMerchant(-1);
		g.gold.should.be.equal(0);
	});

	it('should send some soldiers', async () => {
		c.power.should.be.equal(1000);

		await c.sendTroops(100);
		g.gold.should.be.equal(1020);

		await c.sendMerchant(1000);
		g.gold.should.be.equal(1200);

		await c.sendMerchant(-1);
		g.gold.should.be.equal(0);
	});
});
