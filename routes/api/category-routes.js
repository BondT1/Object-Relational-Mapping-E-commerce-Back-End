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
    .catch(error => {
      console.log(error)
      res.status(500).json(error);
      
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
      res.status(404).json({ message: 'Category id invalid.' });
      return;
    }
    res.json(catData)
  })
  .catch(error => {
    console.log(error);
    res.status(500).json(error);
  });
});

router.post('/', (req, res) => {
  console.log('Category created');
  Category
    .create(req.body)
    .then(catData => res.json(catData))
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

router.put('/:id', (req, res) => {
  console.log('Category id updated.');
  Category
    .update(req.body, {
      where: { id: req.params.id }
    })
    .then(catData => {
      if (!catData) {
        res.status(404).json({ message: 'Category id invalid.' });
        return;
      }
      res.json({ message: 'Category updated.' });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

router.delete('/:id', (req, res) => {
  console.log('Category deleted');
  Category
    .destroy({
      where: { id: req.params.id }
    })
    .then(catData => {
      if (!catData) {
        res.status(404).json({ message: 'id invalid.' });
        return;
      }
      res.json({ message: 'Category deleted.' });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

module.exports = router;


