const express = require('express');
const router = express.Router();

const knex = require('./dbConfig');

router.get('/', (req, res) => {
    knex

    .select('*')

    .from('cars')

    .then(car => {res.status(200).json(car)})

    .catch(error => {res.status(500).json(error);})
})

router.post('/', (req, res) => {
    knex

    .insert(req.body, 'id')

    .into('cars')

    .then(car => {res.status(200).json(car)})

    .catch(error => {res.status(500).json({ error: 'server error' })})
})

router.get('/:id', (req, res) => {

    knex

    .select('*')

    .from('cars')

    .where('id', '=', req.params.id)

    .first()

    .then(car => {res.status(200).json(car)})

    .catch(error => {res.status(500).json(error)})
})

router.post('/', (req, res) => {

    knex

    .insert(req.body, 'id')

    .into('cars')

    .then(car => {res.status(200).json(car)})

    .catch(error => {res.status(500).json({ error: 'server error' })})
})

router.delete('/:id', (req, res) => {

    knex('cars')

    .where({ id: req.params.id })
    
    .del()

    .then(car => {res.status(200).json(car);})

    .catch(error => {res.status(500).json({ error: 'server error' })})
});

module.exports = router;