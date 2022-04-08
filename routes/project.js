var express = require('express');
const { createProject, updateProject, deleteProject, findProjectByName, findProjectById, getProjects } = require('../controllers/project');
var router = express.Router();

// Create Proyect
router.post('/', createProject);

// Edit Proyect
router.post('/:id', updateProject);

// Delete Proyect
router.delete('/:id', deleteProject)

// get project by id
router.get('/:id', findProjectById);

// get projects
router.get('/', getProjects);

module.exports = router;
