const mongoose = require('mongoose')

//Scheema
const productSchema = mongoose.Schema({
    categoryID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
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
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    images: [{
        type: String,
    }]
}, { timestamps: true })

//Create the model according to Scheema
const Product = mongoose.model('Product', productSchema);

//exporting the model to use mongoose functions 
module.exports = Product