const Turia = artifacts.require('Turia');

contract('Turia test', async accounts => {
  beforeEach(async function () {
    this.turia = await Turia.new();
  });

  it('should have a name', async function() {
    const name = await this.turia.name();
    expect(name).to.equals('Turia');
  });

  it('should have a symbol', async function() {
    const name = await this.turia.symbol();
    expect(name).to.equals('TUR');
  });

  it('should have a initial supply', async function() {
    const supply = await this.turia.totalSupply();
    expect(supply.toString()).to.equals('1000000000000000000000000');
  });
});
