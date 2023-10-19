const {Schema, model} = require("mongoose");
const pokemonSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    types: {
        type: String,
        require: true
    },
    imagen: {
        type: String,
        require: true
    },
    idPokemon:{
        type: String,
        require:true
    },
    idUsuario: {
        type: String,
        require: true
    }
});

module.exports = model("Pokemon", pokemonSchema);