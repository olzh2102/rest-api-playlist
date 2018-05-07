const express = require('express');
const router = express.Router();
const Samurai = require('../models/samurai');

// get a list of samurais from the db 
router.get('/samurais', (req, res, next) => {
  res.send({ type: 'GET' });
});

// add a new samurai to the db
router.post('/samurais', (req, res, next) => {
  // var samurai = new Samurai(req.body);
  // samurai.save();
  Samurai.create(req.body).then(samurai => {
    res.send(samurai);
  }).catch(next); 
});


// update a samurai in the db
router.put('/samurais/:id', (req, res, next) => {
  Samurai.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    Samurai.findOne({ _id: req.params.id }).then(samurai => {
      res.send(samurai);
    });
  });
});

// delete a samurai from the db
router.delete('/samurais/:id', (req, res, next) => {
  Samurai.findByIdAndRemove({ _id: req.params.id }).then(samurai => {
    res.send(samurai);
  });
});

module.exports = router;