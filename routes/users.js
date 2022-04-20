const express = require('express');
const router = express.Router();
const users = require('../services/users');


/* GET all users. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await users.getAll());
  } catch (err) {
    console.error(`Error while getting users `, err.message);
    next(err);
  }
});


/* POST users */
router.post('/', async function(req, res, next) {
  try {
    res.json(await users.create(req.body));
  } catch (err) {
    console.error(`Error while creating users`, err.message);
    next(err);
  }
});

/* PUT users */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await users.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating users`, err.message);
    next(err);
  }
});


/* BULK DELETE users */
router.delete('/delete', async function(req, res, next) {
  try {
    
    let params = req.body
    params.forEach(async id => {
      await users.remove(id)
    })

    let message = "users deleted"
    res.json({message})

  } catch (err) {
    console.error(`Error while deleting users`, err.message);
    next(err);
  }

/* DELETE users */
router.delete('/:id', async function(req, res, next) {
  try {
    /* SINGLE DELETE user */
    res.json(await users.remove(req.params.id));

  } catch (err) {
    console.error(`Error while deleting users`, err.message);
    next(err);
  }
});

});


module.exports = router;