const db = require("../models")

const findUserByEmail = async (email) => {
    return db.User.findOne({ where: { email } });
}

const createUser = async (email, password) => {
    return db.User.create({
        email,
        password
    })
}

module.exports = {
    findUserByEmail,
    createUser
}