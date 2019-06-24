const express = require('express');
const db = require('./models'); //models folder

const app = express();

app.use(express.urlencoded({extended: false}));

app.get('/', function(req, res) {
    res.send('everything works');
})

// 3-5 attributes per records
//slack github link

// make your model. POKEMON: name, field, data typ eof field(string/int)

// run the migrations

// create one record route

// read one record route

// read all records route

// update one record route

// delete one record route

app.get('/pokemons', function(req, res) {
    db.pokemon.findAll().then(function(pokemons) {
        res.json(pokemons);
    }); //only do one response for route, like return
});

app.get('/pokemons/:id', function(req, res) {
    db.pokemon.findOne({
        where: {id: parseInt(req.params.id)}
    }).then(function(pokemon) { //promise
        res.json(pokemon);
    }); 
});


app.post('/pokemons', function(req, res) {
    db.pokemon.create({
        pokemonName: req.body.pokemonName, 
        hp: req.body.hp,
        attack: parseInt(req.body.attack),
        defense: req.body.defense
    }).then(function(data) {
        console.log(data);
        res.json(data); 
    })
});

app.put('/pokemons/:id', function(req, res) {
    db.pokemon.update({
        pokemonName: req.body.pokemonName, 
        hp: req.body.hp,
        attack: parseInt(req.body.attack),
        defense: req.body.defense
    }, {
        where: {id: parseInt(req.params.id)}
    }).then(function(count) {
        res.json(count);
    });
});

app.delete('/pokemons/:id', function(req, res) {
    db.pokemon.destroy({
        where: {id: parseInt(req.params.id)}
    }).then(function(data) {
        res.json(data);
    });
});


app.listen(3000);