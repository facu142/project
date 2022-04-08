const express = require('express');
const { createProject, updateProject, deleteProject, findProjectByName, findProjectById, getProjects } = require('../controllers/project');
const { projectValidations } = require('../middlewares/project.validations');
const { validateErrors } = require('../middlewares/validateErrors');

const router = express.Router();

// Create Project
router.post(
    '/',
    projectValidations,
    validateErrors,
    createProject
);

// Edit Project
router.post('/:id',
    projectValidations,
    validateErrors,
    updateProject
);

// Delete Project
router.delete(
    '/:id',
    deleteProject
);

// Get project details by id
router.get(
    '/:id',
    findProjectById
);

// get projects
router.get('/',
    getProjects
);

module.exports = router;
