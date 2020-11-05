const router = require('express').Router();
let Listing = require('../models/listing.model');

router.route('/').get((req, res) => {
  Listing.find()
    .then(listings => res.json(listings)) //where tf did listings vs listing come from
    .catch(err => res.status(400).json('Error: ' + err));
});

  router.route('/add').post((req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const owner = req.body.owner;
    const condition = req.body.condition;
    const location = req.body.location;
    const price = req.body.price;
    const category = req.body.category;
    const images = req.body.images;

    const newListing = new Listing({
      title,
      description,
      owner,
      condition,
      location,
      price,
      category,
      images,
    });

  newListing.save()
    .then(() => res.json('Listing added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;