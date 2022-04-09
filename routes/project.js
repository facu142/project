const express = require('express');
const { createProject, updateProject, deleteProject, findProjectByName, findProjectById, getProjects } = require('../controllers/project');
const { checkAdminRole } = require('../middlewares/checkAdminRole');
const { projectValidations } = require('../middlewares/project.validations');
const { validateErrors } = require('../middlewares/validateErrors');
const { verifyToken } = require('../middlewares/verifyToken');

const router = express.Router();

// Create Project
router.post(
    '/',
    verifyToken,
    checkAdminRole,
    projectValidations,
    validateErrors,
    createProject
);

// Edit Project
router.post(
    '/:id',
    verifyToken,
    checkAdminRole,
    projectValidations,
    validateErrors,
    updateProject
);

// Delete Project
router.delete(
    '/:id',
    verifyToken,
    checkAdminRole,
    deleteProject
);

// Get project details by id
router.get(
    '/:id',
    verifyToken,
    findProjectById
);

// get projects
router.get(
    '/',
    verifyToken,
    getProjects
);

module.exports = router;
