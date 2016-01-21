var React = require('react');
var PokemonStore = require('../stores/pokemonStore');
var apiUtils = require('../util/apiUtil');
var PokemonIndexItem = require('./pokemonIndexItem');


var PokemonsIndex = React.createClass({
  getInitialState: function () {
    return { pokemons: PokemonStore.all() };
  },

  _onChange: function () {
    this.setState({ pokemons: PokemonStore.all() });
  },

  componentDidMount: function () {
    this.listenerToken = PokemonStore.addListener(this._onChange);
    apiUtils.fetchAllPokemon();
  },

  componentWillUnmount: function () {
    PokemonStore.remove(this.listenerToken);
  },

  render: function() {
    var pokemonListItems = "";

    if (this.state.pokemons.length > 0) {

      pokemonListItems = this.state.pokemons.map(function (pokemon) {
        return <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />;
        }
      );
    }
    return (
      <ul>
        {pokemonListItems}
      </ul>
    );
  }
});

module.exports = PokemonsIndex;
