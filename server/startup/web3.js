const Web3 = require('web3');

const sampleArtifact = require('../../client/src/contracts/sample.json')

const web3Func = async () => {
    let web3, networkID,
        sampleAddress, sampleContract;

    try {
        web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
        networkID = await web3.eth.net.getId();
        if (sampleArtifact) {
            let { abi } = sampleArtifact;
            try {
                sampleAddress = sampleArtifact.networks[networkID].address;
                sampleContract = new web3.eth.Contract(abi, sampleAddress);
            } catch (error) {
                console.log(error);
            }
            return {
                web3, networkID,
                sampleAddress, sampleContract
            }
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = { web3Func };