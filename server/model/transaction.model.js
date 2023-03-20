const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^0x[0-9a-fA-F]{40}$/.test(v);
            },
            message: props => `${props.value} is not a valid address`
        }
    },
    randomNumber: {
        type: Number,
        required: true
    },
}, {
    timestamps: true,
})


const Transactions = mongoose.model('transaction', transactionSchema);

module.exports = { Transactions };
