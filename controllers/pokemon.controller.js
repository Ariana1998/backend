const pokemonCtrl = {};
const Pokemon = require('../models/Pokemon');

pokemonCtrl.getPokemonesByUser = async (req, res) => {
    const pokemon = await Pokemon.find({ idUsuario: req.params.id });
    res.json(pokemon)
}

pokemonCtrl.getPokemones = async (req, res) => {
    const pokemon = await Pokemon.find();
    res.json(pokemon)
}

pokemonCtrl.createPokemon = async (req, res) => {
    const { name, types, imagen, idPokemon, idUsuario } = req.body;
    const newPokemon = new Pokemon({
        name: name,
        types: types,
        imagen: imagen,
        idPokemon: idPokemon,
        idUsuario: idUsuario    
    });
    await newPokemon.save();
    res.json({ message: 'Pokemon Saved' })
}

pokemonCtrl.getPokemon = async (req, res) => {
    const pokemon = await Pokemon.findById(req.params.id);
    res.json(pokemon);
}

pokemonCtrl.updatePokemon = async (req, res) => {
    const {name, types, imagen, idPokemon} = req.body;
    await Pokemon.findOneAndUpdate({ _id: req.params.id }, {
        name: name,
        types: types,
        imagen: imagen,
        idPokemon: idPokemon,
    });
    res.json({ message: 'Pokemon Updated' })
}

pokemonCtrl.deletePokemon = async (req, res) => {
    await Pokemon.findByIdAndDelete(req.params.id);
    res.json({ message: 'Pokemon Deleted' })
}

module.exports = pokemonCtrl;