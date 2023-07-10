const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  console.log('All tags read');
  Tag
    .findAll({
      include: [Product]
    })
    .then(TData => res.json(TData))
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  console.log('Tag id read');
  Tag
    .findOne({
      where: { id: req.params.id },
      include: [Product]
    })
    .then(TData => {
      if (!TData) {
        res.status(404).json({ message: "Tag id invalid" });
        return;
      }
      res.json(TData)
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
