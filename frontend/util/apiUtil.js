var PokemonActions = require('../actions/pokemonActions');

var apiUtils = {
  fetchAllPokemon: function () {
    $.ajax({
      type: "GET",
      url: "api/pokemon",
      dataType: "json",
      success: function (data) {
        PokemonActions.recieveAllPokemons(data);
      },
      error: function (data) {
        console.log('fetch error');
      }
    });
  }
};

module.exports = apiUtils;
