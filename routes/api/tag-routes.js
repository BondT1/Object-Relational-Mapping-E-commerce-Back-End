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
  console.log('Tag created');
  Tag
    .create(req.body)
    .then(TData => res.json(TData))
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

router.put('/:id', (req, res) => {
  console.log('Tag id updated');
  Tag
    .update(req.body, {
      where: { id: req.params.id }
    })
    .then(TData => {
      if (!TData) {
        res.status(404).json({ message: 'Invalid tag id.' });
        return;
      }
      res.json({ message: 'Tag updated.' });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

router.delete('/:id', (req, res) => {
  console.log('Tag id deleted');
  Tag.destroy({
    where: { id: req.params.id }
  })
    .then(TData => {
      if (!TData) {
        res.status(404).json({ message: 'Tag id invalid' });
        return;
      }
      res.json({ message: 'Tag deleted' });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

module.exports = router;
