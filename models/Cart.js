const mongoose = require('mongoose')

//Scheema
const cartSchema = mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    productID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    }
}, { timestamps: true })

//Create the model according to Scheema
const Cart = mongoose.model('Cart', cartSchema);

//exporting the model to use mongoose functions 
module.exports = Cart