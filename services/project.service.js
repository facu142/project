const db = require("../models");
const sequelize = require('sequelize');
const { paginate } = require("../helpers/paginate");

const findProjectsByName = async (name) => {
    const lookupValue = name.toLowerCase();
    return await db.Project.findAll({
        where: {
            name: sequelize.where(sequelize.fn('LOWER', sequelize.col('name')), 'LIKE', '%' + lookupValue + '%'),
        },
        include: {
            model: db.User,
            as: 'users',
            attributes: { exclude: ['password'] },
        }
    });

}

const getProjectsPaginated = async (model, limit, page, req) => {
    return await paginate(model, limit, page, req)
}


module.exports = {
    findProjectsByName,
    getProjectsPaginated
}