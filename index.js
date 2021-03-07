const express = require('express')
const app = express()

const pokemons = [
    'charizard',
    'pikachu',
    'piteco',
    'squirtle',
];

//Listar Pokemons no Brownser
app.get('/pokemons', (req, res) => {
    return res.send(pokemons)
 });

 //Listar Pokemon Escolhido dentro do Array
 app.get('/pokemons/:pokemon', (req, res) => {
    const { pokemon } = req.params;
    if (pokemons.indexOf(pokemon) > -1){
        let listaRetorno = pokemons.filter(i => i.includes( pokemon || ''))
        res.send(`Vai ${listaRetorno} eu escolho você!`)
    }else{
        res.send('Você não tem esse Pokemon!')
    };
  
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
});
