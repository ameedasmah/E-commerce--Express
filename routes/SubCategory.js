const express = require('express')
const router = express.Router()
const SubCategory = require('../models/SubCategory.js')

router.get('/', async (req, res) => {
    SubCategory.find()
        .exec((err, subCategories) => {
            if (err) return res.status(401).json({ success: false })
            res.status(201).json({ success: true, subCategories })
        })
})

router.post('/create', async (req, res) => {
    const { categoryID, name, imageUrl, description } = req.body
    try {
        let subCategory = new SubCategory({
            categoryID,
            name,
            imageUrl,
            description,
        })
        await subCategory.save()
        res.status(201).json({
            status: true, subCategory
        })

    } catch (err) {
        // console.log('hi')
        res.status(404).json({ success: false, error: err })
    }
})

module.exports = router