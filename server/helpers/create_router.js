const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {
  const router = express.Router();
    // INDEX
  router.get('/', (req, res) => {
      collection.find().toArray()
          .then(result => res.json(result))
          .catch(err => {
              console.error(err);
              res.status(500);
              res.json({status: 500, error: err})
          })
  });

  // CREATE
  router.post('/', (req, res) => {
        collection.insertOne(req.body)
            .then(result => res.json(result.ops[0]))
            .catch(err => {
            console.error(err);
            res.status(500);
            res.json({status: 500, error: err})
        })
    });

  // DELETE
    router.delete('/:id', (req, res) => {
        collection.deleteOne({_id: ObjectID(req.params.id)})
            .then(result => res.json(result))
            .catch(err => {
            console.error(err);
            res.status(500);
            res.json({status: 500, error: err})
        })
    });



  return router
};

module.exports = createRouter;