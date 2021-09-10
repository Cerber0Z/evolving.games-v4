const mongoose = require('mongoose');

const URI = 'mongodb://localhost/videogame';

mongoose.connect(URI)
    .then(db => console.log('la base de datos esta conectada'))
    .catch(err => console.error(err));


    module.exports = mongoose;