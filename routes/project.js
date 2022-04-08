var express = require('express');
const { createProject, updateProject, deleteProject, findProjectByName, findProjectById } = require('../controllers/project');
var router = express.Router();

// Create Proyect
router.post('/', createProject);

// Edit Proyect
router.post('/:id', updateProject);

// Delete Proyect
router.delete('/:id', deleteProject)

// get project by id
router.get('/:id', findProjectById);

// find project by name
router.get('/', findProjectByName);


module.exports = router;
