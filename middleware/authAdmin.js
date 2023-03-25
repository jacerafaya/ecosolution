const jwt = require('jsonwebtoken')
const Admin = require('../models/Admin')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        console.log(token);
        const decoded = jwt.verify(token, 'thisIsMySecretMessage')
        console.log("ena lina", decoded);
        const admin = await Admin.findOne({ _id: decoded._id, 'tokens.token': token })
        console.log('admin mil middleware', admin);
        

        if (!admin) {
            throw new Error()
        }

        req.token = token
        req.admin = admin
        console.log('token, admin',req.token,req.admin);
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please make sure that you gave the right credentials.' })
    }
}

module.exports = auth

