class Units
{
  constructor(isDead,isWounded)
  {
    this.isDead = false;
    this.isWounded = false;

  }

  get isDead()
  {
    return this.isDead_;
  }

  get isWounded()
  {
    return this.isWounded_;
    delete this;
  }




}


module.exports = {Units};