const sample = artifacts.require('sample');

module.exports = function (deployer) {
    deployer.deploy(sample);
}