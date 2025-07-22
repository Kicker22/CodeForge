const express = require('express');
const CrudController = require('../controllers');

const router = express.Router();
const crudController = new CrudController();

router.post('/items', (req, res) => crudController.createItem(req, res));
router.get('/items', (req, res) => crudController.readItems(req, res));
router.get('/items/:id', (req, res) => crudController.readItem(req, res));
router.put('/items/:id', (req, res) => crudController.updateItem(req, res));
router.delete('/items/:id', (req, res) => crudController.deleteItem(req, res));

module.exports = router;