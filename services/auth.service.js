const db = require("../models")

const findUserByEmail = async (email) => {
    return db.User.findOne({ where: { email } });
}

const createUser = async (email, password, firstName, lastName) => {
    return db.User.create({
        email,
        password,
        firstName,
        lastName
    })
}

module.exports = {
    findUserByEmail,
    createUser
}