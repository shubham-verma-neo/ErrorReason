const Sample = artifacts.require('sample');

contract('sample', accounts => {
    let sample;
    let owner = accounts[0];
    let user = accounts[1];

    before(async () => {
        sample = await Sample.deployed({ from: owner });
    })

    it('owner should be accounts[0]', async () => {
        let _owner = await sample.owner({ from: accounts[2] });
        assert.equal(owner, _owner, "Owner address not set properly.");
    });

    it('owner should set randomAddress', async () => {
        await sample.setRandomAddress(user, { from: owner });
        let _user = await sample.randomAddress({ from: accounts[3] });
        assert.equal(user, _user, "User address not set properly.");
    });
})