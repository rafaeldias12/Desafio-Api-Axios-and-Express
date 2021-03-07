const express = require('express')
const app = express()

const pokemons = [
    'Charizard',
    'Pikachu',
    'Piteco',
    'Squirtle',
];

//Listar Pokemons no Brownser
app.get('/pokemons', (req, res) => {
    const { pokemon } = req.query;
    let listaRetorno = pokemons.filter(i => i.includes( pokemon || ''))
    return res.send(listaRetorno)
 });

 app.get('/pokemons/:pokemon', (req, res) => {
    const { pokemon } = req.params
    res.send(`Vai ${pokemon.toLocaleUpperCase()} eu escolho você!`)
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
});
