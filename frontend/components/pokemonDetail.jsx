var React = require('react');
var PokemonStore = require('../stores/pokemonStore');

var PokemonDetail = React.createClass({

  getInitialState: function() {
    return {pokemon: this.getStateFromStore() };
  },

  getStateFromStore: function() {
    return PokemonStore.find(this.props.params.id);
  },

  render: function () {
    var pokemon = this.state.pokemon;
    var details;
    if (pokemon) {
      details =
        <div className="detail">
          <p>{pokemon.name}</p>
          <img src={pokemon.image_url} />
        </div>;
    } else {
      details = <div className="detail"></div>;
    }

    return(
      <div>
        <div className="pokemon-detail-pane">
          {details}
        </div>
      </div>
    );
  }
});

module.exports = PokemonDetail;
