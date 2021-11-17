const express = require('express')
const router = express.Router()
const Cart = require('../models/Cart')

router.get('/getCart', async (req, res) => {
    const userID = req.query.userID
    try {
        const cart = await Cart.find({ 'userID': userID })
            .populate('productID')
            .exec();

        res.status(200).json({ success: true, cart })

    } catch (err) {
        res.status(404).json({ success: false, error: err })
    }
})

router.post("/create", async (req, res) => {
    const newCart = req.body;

    Cart.findOne({ productID: newCart.productID }).exec((err, cart) => {
        if (err) res.status(404).json({ success: false, error: err });
        if (cart) {
            //edit carts' quantity
            cart.quantity += newCart.quantity;
            cart.save();

            res.status(200).json({ success: true, msg: "updated" });
        } else {
            //add new cart
            const cart = new Cart({
                userID: newCart.userID,
                productID: newCart.productID,
                quantity: newCart.quantity,
                totalPrice: newCart.totalPrice,
            });
            cart.save();

            res.status(200).json({ success: true, msg: "created" });
        }
    });
});


module.exports = router