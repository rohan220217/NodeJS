const express = require('express');
const router = express.Router();
const Joi = require('joi');

const genres = [
    { id: 1, name: 'Action' },  
    { id: 2, name: 'Horror' },  
    { id: 3, name: 'Romance' },  
  ];

router.get('/', (req, res) => {
    res.send(genres);
})

router.get('/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if(!genre) return res.status(404).send('The genre of given id is not found.');

    res.send(genre);
});

router.post('/', (req, res) => {
    const { error } = validateGenres(req.body);
    if (error) return res.status(400).send(error);

    const genre = {
        id: genres.length + 1,
        name: req.body.name
    };
    genres.push(genre);
    res.send(genre);
});

router.put('/:id', (req, res) =>{
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if(!genre) return res.status(404).send('The genre of given id is not found.');

    const { error } = validateGenres(req.body);
    if (error) return res.status(400).send(error);

    genre.name = req.body.name;
    res.send(genre);

});

router.delete('/:id', (req, res) =>{
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if(!genre) return res.status(404).send('The genre of given id is not found.');

    const index = genres.indexOf(genre);
    genres.splice(index, 1);

    res.send(genre);

})

function validateGenres(genre){
    const schema = {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(genre, schema);
}

module.exports = router;