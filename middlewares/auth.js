const jwt = require('jsonwebtoken')
const User = require('../models/User')

const auth = async (req, res, next) => {
    try {

        const token = req.header('auth-sky')
        console.log(token)
        if (token) {
            const decoded = await jwt.verify(token, 'secret')
            // console.log(userId)
            const user = await User.findOne({ _id: decoded._id })
            // console.log(user)
            req.user = user

            next()

        } else {
            throw Error
        }
    } catch {
        res.status(401).send('no user exists in db to update');
    }

}


module.exports = auth