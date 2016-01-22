var Dispatcher = require('../dispatcher/dispatcher');
var PokemonConstants = require('../constants/pokemonConstants');

var PokemonActions = {
  recieveAllPokemons: function (allPokemons) {
    //Tells Stores something was done
    Dispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECIEVED,
      pokemons: allPokemons
    });
  },

  receiveSinglePokemon: function (pokemon) {
    //Call dispatch
    Dispatcher.dispatch({
      actionType: "FETCHED",
      pokemon: pokemon
    });
  }
};

module.exports = PokemonActions;
