const sequelize = require('sequelize');
const db = require('../models');

const createProject = async (req, res) => {

    const { name, description, status, users } = req.body;

    try {
        const project = await db.Project.create({
            name, description, status
        });

        project.setUsers(users);

        res.status(200).json({
            meta: {
                status: 200,
                errors: null,
            },
            data: {
                ...project
            },
            msg: 'Project created successfuly'
        })
    } catch (err) {
        res.status(500).send({
            meta: {
                status: 500,
                errors: err
            },
        })
    }
};

const updateProject = async (req, res) => {
    const { id } = req.params;
    const { name, description, status, projectManagerId } = req.body;
    const project = await db.Project.findByPk(id)

    if (!project) {
        res.status(404).json({
            msg: 'Project not found'
        });
    };

    try {

        const updatedProject = await project.update({ name, description, status, projectManagerId })

        return res.status(200).json({
            meta: {
                status: 200,
                errors: null,
            },
            data: {
                ...updatedProject
            },
            msg: 'Project Updated successfuly'
        })
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            meta: {
                status: 500,
                errors: err
            },
        })
    }

};

const deleteProject = async (req, res) => {
    const { id } = req.params;
    const project = await db.Project.findByPk(id)

    if (!project) {
        return res.status(404).json({
            msg: 'Project not found'
        });
    };

    try {
        const deletedProject = await project.destroy();
        return res.status(200).json({
            meta: {
                status: 200,
                errors: null,
            },
            data: {
                ...deletedProject
            },
            msg: 'Project deleted successfuly'
        })
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            meta: {
                status: 500,
                errors: err
            },
        })
    }

};

const findProjectByName = async (req, res) => {
    const { name } = req.query;
    const lookupValue = name.toLowerCase();

    try {

        const projects = await db.Project.findAll({
            where: {
                name: sequelize.where(sequelize.fn('LOWER', sequelize.col('name')), 'LIKE', '%' + lookupValue + '%'),
            },
            include: {
                model: db.User,
                as: 'users',
                attributes: { exclude: ['password'] },
            }
        });

        return res.status(200).json({
            meta: {
                status: 200,
                errors: null,
            },
            data: {
                projects
            },
        })
    } catch (err) {
        return res.status(500).send({
            meta: {
                status: 500,
                errors: err
            },
        })
    }

};

const findProjectById = async (req, res) => {
    const { id } = req.params;

    const project = await db.Project.findByPk(id, {
        include: {
            model: db.User,
            as: 'users',
            attributes: { exclude: ['password'] },
        }
    });
    if (!project) {
        return res.status(404).json({
            msg: 'Project not found'
        });
    };

    return res.json({
        meta: {
            status: 200,
            errors: null,
        },
        data: {
            project
        },
    })
}

module.exports = {
    createProject,
    updateProject,
    deleteProject,
    findProjectByName,
    findProjectById
};