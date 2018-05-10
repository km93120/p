const {Units} = require('../units');

class City
{

constructor(corn,gold)
{
  this.corn = corn;
  this.gold = gold;
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

  get gold()
  {
    return this.gold_;
  }

  get unitsList()
  {
    return this.unitsList_;
  }


}




