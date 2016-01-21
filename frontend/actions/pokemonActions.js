var Dispatcher = require('../dispatcher/dispatcher');
var PokemonConstants = require('../constants/pokemonConstants');

var PokemonActions = {
  recieveAllPokemons: function (allPokemons) {
    Dispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECIEVED,
      pokemons: allPokemons
    });
  }
};

module.exports = PokemonActions;
