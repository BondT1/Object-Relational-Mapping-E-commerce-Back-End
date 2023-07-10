const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  console.log('Categories Read')
  Category
    .findAll({
      include: [Product]
    })
    .then(catData => res.json(catData))
    .catch(err => {
      console.log(err)
      res.status(500).json(err);
    })
});

router.get('/:id', (req, res) => {
console.log('Category id read')
Category
  .findOne({
    where: { id: req.params.id },
    include: [Product]
  })
  .then(catData => {
    if (!catData) {
      res.status(404).json({ message: "category id not valid." });
      return;
    }
    res.json(catData)
  })
  .catch(err => {
    console.log(error);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
