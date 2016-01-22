var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var PokemonConstants = require('../constants/pokemonConstants');

var PokemonStore = new Store(Dispatcher);

var _pokemons = {};

PokemonStore.all = function() {
  var allPokemons = [];
  // add objects in _pokemons to allPokemons array.
  // for (var key in _pokemons) {
  //   if (_pokemons.hasOwnProperty(key)) {
  //     allPokemons.push(_pokemons[key]);
  //   }
  // }

  Object.keys(_pokemons).map(function(id) {
    allPokemons.push(_pokemons[id]);
  });
  return allPokemons;
};

PokemonStore.resetPokemons = function (pokemons) {
  _pokemons = {};
  for (var i = 0; i < pokemons.length; i++) {
    _pokemons[pokemons[i].id] = pokemons[i];
  }
};

PokemonStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case PokemonConstants.POKEMONS_RECIEVED:
      PokemonStore.resetPokemons(payload.pokemons);
      PokemonStore.__emitChange();
      break;
    case "FETCHED":
      PokemonStore.__emitChange();
      break;
  }
};

PokemonStore.find = function(id) {
  var pokemonID = parseInt(id);
  return _pokemons[pokemonID];
};

module.exports = PokemonStore;
