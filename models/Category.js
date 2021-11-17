const mongoose = require('mongoose')

//Scheema
const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
    },
    description: {
        type: String,
    },

}, { timestamps: true })

//Create the model according to Scheema
const Category = mongoose.model('Category', categorySchema);

//exporting the model to use mongoose functions 
module.exports = Category