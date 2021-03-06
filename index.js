const axios = require('axios');
const express = require('express')
const app = express()

const pokemons = [
    'Charizard',
    'Pikachu',
    'Piteco',
    'Squirtle',
];
//Lsitar Pokemons no Brownser
app.get('/pokemon', (req, res) => {
    const { nome } = req.query;
    let listaRetorno = pokemons.filter(i => i.includes(nome || ''))
    return res.json(listaRetorno)
 });

//Consumindo API com Axios
app.get('/pokemons', (req, res) => {
    let arrayPokemon = [];
    axios.get('https://pokeapi.co/api/v2/pokemon?offset=100&limit=5').then((respo) => {
        arrayPokemon = respo.data
        return res.send(arrayPokemon)
    });
 });
 
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
});
