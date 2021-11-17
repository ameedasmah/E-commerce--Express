const express = require('express')
const router = express.Router()
const Order = require('../models/Order')
const Cart = require('../models/Cart')

router.post('/submit', async (req, res) => {
    const orders = req.body

    try {
        for (i = 0; i < orders.length; i++) {
            await Cart.findOneAndDelete({ _id: orders[i]._id })

            const order = new Order({
                userID: orders[i].userID,
                productID: orders[i].productID._id,
                quantity: orders[i].quantity,
                totalPrice: orders[i].totalPrice,
                status: "Pending"
            })
            await order.save()
        }
        res.status(200).json({ success: true })

    } catch (err) {
        res.status(404).json({ success: false, error: err })
    }
})

router.get('/getOrders', async (req, res) => {
    const userID = req.query.userID
    try {
        const order = await Order.find({ 'userID': userID })
            .populate('productID')
            .populate('userID')
            .exec();

        res.status(200).json({ success: true, order })
    } catch (err) {
        res.status(404).json({ success: false, error: err })
    }
})

module.exports = router