const express = require('express')
const router = express.Router()
const Category = require('../models/Category')

router.get('/', async (req, res) => {
    Category.find()
        .exec((err, categories) => {
            if (err) return res.status(401).json({ success: false })
            res.status(201).json({ success: true, categories })
        })
})

router.post('/create', async (req, res) => {
    const { name, imageUrl, description } = req.body
    try {
        let category = new Category({
            name,
            imageUrl,
            description,
        })
        console.log(req.body)
        await category.save()
        res.status(201).json({
            name, imageUrl, description
        })

    } catch (err) {
        res.status(404).json({ success: false, error: err })
    }
})

module.exports = router