const router = require('express').Router();
const {
  Category,
  Product
} = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  res.send(`<h1>GET ALL CATEGORIES</h1>`);
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  res.send(`<h1>GET SINGLE CATEGORY</h1>`);
});

router.post('/', (req, res) => {
  res.send(`<h1>POST NEW CATEGORY</H1>`);
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  res.send(`<h1>UPDATE CATEGORY BY ID</H1>`);
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  res.send(`<h1>DELETE CATEGORY BY ID</H1>`);
});

module.exports = router;