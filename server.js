const express = require('express');
const app = express();
const Pokemon = require('./models/pokemon');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

//middleware
app.use(methodOverride('_method'))
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: false
}))

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

//create route
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs')
})

app.post('/pokemon', (req, res) => {
    Pokemon.push(req.body);
    console.log(req.body)
    res.redirect('/pokemon');
})

// show route
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {
        pokemon: Pokemon[req.params.id],
        index: req.params.id
    });
});

//edit route
app.get('/pokemon/:id/edit', (req, res) => {
    res.render('edit.ejs', {
        pokemonEdit: Pokemon[req.params.id],
        index: req.params.id
    });
});
app.put('/pokemon/:index', (req, res) => {
    Pokemon[req.params.index] = req.body;
    res.redirect('/pokemon');

});

//delete route
app.delete('/pokemon/:id', (req, res) => {
    Pokemon.splice(req.params.id, 1);
    res.redirect('/pokemon');
})

//server
app.listen(3000, () => {
    console.log('pokemon server working')
});