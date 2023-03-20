const crypto = require('../routes/crypto');

module.exports = function (app, express) {
    app.use(express.json());

    app.get('/', (req, res) => {
        res.send(welcome);
    });

    app.use('/crypto', crypto);
}