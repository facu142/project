const db = require('../models');
const { findProjectsByName, getProjectsPaginated } = require('../services/project.service');
const { LIMIT_PAGE } = require('../constants/limit-page.contants')

const createProject = async (req, res) => {

    const { name, description, status, users, projectManagerId } = req.body;

    try {
        const project = await db.Project.create({
            name, description, status, projectManagerId
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
        await db.user_project.destroy({ where: { projectId: id } });
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

const getProjects = async (req, res) => {
    const { name } = req.query;
    let projects = [];
    const { page = 1 } = req.query;
    try {
        if (name) {
            projects = await findProjectsByName(name);
            return res.status(200).json({
                meta: {
                    status: 200,
                    errors: null,
                },
                data: {
                    projects
                },
            })
        } else {
            const { results, next, prev } = await getProjectsPaginated(db.Project, LIMIT_PAGE, page, req);

            if (results.length === 0) {
                return res.status(404).json({
                    msg: 'No projects found'
                });
            }
            return res.status(200).json({
                prev,
                next,
                results,
            });
        }


    } catch (err) {
        return res.status(500).json({
            meta: {
                status: 500,
                errors: err
            },
        })
    }
};

const findProjectById = async (req, res) => {
    const { id } = req.params;
    console.log(req);
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
    findProjectById,
    getProjects
};