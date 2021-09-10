const mongoose = require('mongoose');
const {Schema} = mongoose;

 const VideogameSchema = new Schema({  
    name: {type: String, required: true},
    developers: {type: String, required: true},
    caratula: {type: String, required: true},
    banner: {type: String, required: true},
    description: {type: String, required: true},
    platform: {type: String, required: true},
    price: {type: Number, required: true},
    video: {type: String, required: true},
    category: {type: String, required: true},
});

module.exports = mongoose.model('videogameS', VideogameSchema)

