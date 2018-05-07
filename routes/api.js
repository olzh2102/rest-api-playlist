const express = require('express');
const router = express.Router();

// get a list of samurais from the db 
router.get('/samurais', (req, res) => {
  res.send({ type: 'GET' });
});

// add a new samurai to the db
router.post('/samurais', (req, res) => {
  console.log(req.body);
  res.send({ 
    type: 'POST',
    name: req.body.name,
    rank: req.body.rank
  });
});


// update a samurai in the db
router.put('/samurais/:id', (req, res) => {
  res.send({ type: 'PUT' });
});

// delete a samurai from the db
router.delete('/samurais/:id', (req, res) => {
  res.send({ type: 'DELETE' });
});

module.exports = router;