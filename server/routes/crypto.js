const express = require('express');
const router = express.Router();
const { web3Func } = require('../startup/web3');

const { Transactions } = require('../model/transaction.model');

const cors = require("cors");
router.use(cors())

router.post("/sample", cors(), async (req, res) => {
    const { web3, sampleAddress, sampleContract } = await web3Func();
    let { address, randomNumber } = req.body;
    let transaction;

    try {
        const Account = web3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);
        web3.eth.accounts.wallet.add(Account);

        let transactionObject = {
            from: Account.address,
            to: sampleAddress,
            gas: 200000,
            gasPrice: '10000000000',
            nonce: await web3.eth.getTransactionCount(Account.address),
        };

        let receipt = await sampleContract.methods.setRandomNumber(randomNumber).send(transactionObject);

        console.log(receipt)
        if (receipt.status) {
            transaction = await new Transactions({
                address: address,
                randomNumber: randomNumber,
            }).save();
        }

        web3.eth.accounts.wallet.remove(Account.address);

        res.json({
            message: "Random Number Set.",
            status: true,
            randomNumber: randomNumber,
            address: address,
            receipt: receipt
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: "Random Number not Set.",
            status: false,
            error: error.message
        })
    }
})

module.exports = router;
