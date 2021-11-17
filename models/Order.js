const mongoose = require('mongoose')

//Scheema
const orderSchema = mongoose.Schema({
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
    },
    status: {
        type: String,
        require: true
    }
}, { timestamps: true })

//Create the model according to Scheema
const Order = mongoose.model('Order', orderSchema);

//exporting the model to use mongoose functions 
module.exports = Order