const { connect, connection } = require('mongoose');

connect('mongodb://localhost/socialnetworkDB', {
    // useNewUrlPaser: true,
    // useUnifiedTopology: true,
});

module.exports = connection;