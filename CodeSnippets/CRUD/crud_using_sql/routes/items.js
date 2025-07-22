const express = require('express');
const router = express.Router();
const connection = require('../config/dbConnection');

// Middleware for error handling
const handleErrors = (err, req, res, next) => {
  console.error('Database error:', err);
  res.status(500).json({ error: 'Internal server error' });
};

// Middleware for validating item ID
const validateItemId = (req, res, next) => {
  const { id } = req.params;
  if (!id || isNaN(parseInt(id, 10))) {
    return res.status(400).json({ error: 'Invalid item ID' });
  }
  next();
};

// Middleware for validating input data
const validateItemData = (req, res, next) => {
  const { name, price } = req.body;
  if (!name || typeof name !== 'string' || !price || isNaN(parseFloat(price))) {
    return res.status(400).json({
      error: 'Invalid input data. Name must be a string, and price must be a number.',
    });
  }
  next();
};

// Helper function for database queries
const dbQuery = (query, params) =>
  new Promise((resolve, reject) => {
    connection.query(query, params, (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });

// GET: Fetch paginated items
router.get('/items', async (req, res, next) => {
  const { page = 1, limit = 10 } = req.query;
  const offset = (parseInt(page) - 1) * parseInt(limit);

  try {
    const items = await dbQuery('SELECT * FROM basiccruddatabase.items LIMIT ? OFFSET ?', [
      parseInt(limit),
      offset,
    ]);
    res.json(items);
  } catch (err) {
    next(err);
  }
});

// POST: Create a new item
router.post('/items', async (req, res, next) => {
  const { name, diceRoll, description } = req.body;

  if (!name || typeof name !== 'string' || !description || typeof description !== 'string') {
    return res.status(400).json({
      error: 'Invalid input. Name and description must be strings. Dice roll is optional.',
    });
  }

  try {
    const result = await dbQuery(
      'INSERT INTO basiccruddatabase.items (name, diceRoll, description) VALUES (?, ?, ?)',
      [name, diceRoll || null, description]
    );
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    next(err);
  }
});

// PUT: Update an item
router.put('/items/:id', validateItemId, validateItemData, async (req, res, next) => {
  const { id } = req.params;
  const { name, price } = req.body;

  try {
    const item = await dbQuery('SELECT * FROM basiccruddatabase.items WHERE id = ?', [id]);
    if (item.length === 0) {
      return res.status(404).json({ error: 'Item not found' });
    }

    const result = await dbQuery('UPDATE basiccruddatabase.items SET name = ?, price = ? WHERE id = ?', [
      name,
      price,
      id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Item not updated. Item may not exist.' });
    }

    res.json({ success: true, message: `Item with ID ${id} was updated successfully` });
  } catch (err) {
    next(err);
  }
});

// DELETE: Delete an item
router.delete('/items/:id', validateItemId, async (req, res, next) => {
  const { id } = req.params;

  try {
    const item = await dbQuery('SELECT * FROM basiccruddatabase.items WHERE id = ?', [id]);
    if (item.length === 0) {
      return res.status(404).json({ error: 'Item not found' });
    }

    await dbQuery('DELETE FROM basiccruddatabase.items WHERE id = ?', [id]);
    res.json({ success: true, message: `Item with ID ${id} was deleted successfully` });
  } catch (err) {
    next(err);
  }
});

// Use the error handling middleware
router.use(handleErrors);

module.exports = router;
