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
  },

  fetchPokemon: function(pokemonID) {
    //cause components state to change
    //get Pokemon from DB using AJAX
    $.ajax({
      type: "GET",
      url: "api/pokemon/" + pokemonID,
      dataType: "json",
      success: function(data) {
        // console.log("Success");
        PokemonActions.receiveSinglePokemon(data);
      },
      error: function (data) {
        // console.log("Error in fetchPokemon");
        alert("Error in fetch");
      }
    });

    //call PokemonAction.receiveSinglePokemon
  }
};

module.exports = apiUtils;
