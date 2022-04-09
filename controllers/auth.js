const { findUserByEmail, createUser } = require("../services/auth.service");
const bcrypt = require('bcryptjs');
const { createJWT } = require('../helpers/createJWT');

const registerUser = async (req, res) => {

    const { email, password, firstName, lastName } = req.body;

    try {
        const userDb = await findUserByEmail(email);

        if (userDb) {
            return res.status(400).json({
                msg: 'User already exists'
            });
        }

        const user = await createUser(email, password, firstName, lastName);

        return res.json({
            msg: 'User created successfuly',
            user
        });

    } catch (err) {
        console.log(err);
        res.status(500).send({
            meta: {
                status: 500,
                errors: err
            },
        })
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await findUserByEmail(email)

        const validPass = bcrypt.compareSync(password, user.password);

        if (!user || !validPass) {
            return res.status(400).json({
                msg: 'Wrong Email or password',
            });
        }

        // Create JWT
        const { roleId, id } = user;
        const token = await createJWT ({ roleId, email, id });

        return res.status(200).json({
            msg: 'User logged in',
            token,
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            meta: {
                status: 500,
                errors: err
            },
        })
    }
}

module.exports = {
    registerUser,
    loginUser
};
