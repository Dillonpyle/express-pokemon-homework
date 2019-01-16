const express = require('express');
const app = express();

const Pokemon = require('./models/pokemon');

// set up your data base
// app.get('/pokemon', (req, res) => {
//     res.send(Pokemon);
// })

// set up your index view
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {
        pokemonList: Pokemon,
    });
});

app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {
        pokemon: Pokemon[req.params.id]
    });
});

app.listen(3000, () => {
    console.log('pokemon server working')
});