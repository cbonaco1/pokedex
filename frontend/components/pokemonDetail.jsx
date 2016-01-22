var React = require('react');
var PokemonStore = require('../stores/pokemonStore');
var APIUtils = require('../util/apiUtil');

var PokemonDetail = React.createClass({

  getInitialState: function() {
    return {pokemon: this.getStateFromStore() };
  },

  getStateFromStore: function() {
    return PokemonStore.find(this.props.params.id);
  },

  //called when properties change
  componentWillReceiveProps: function (newProps) {
    //Call util function to get pokemon that has newProps
    //console.log(newProps.params.id);
    APIUtils.fetchPokemon(newProps.params.id);
  },

  _updateView: function () {
    this.setState({pokemon: this.getStateFromStore() });
  },

  componentWillMount: function () {
    PokemonStore.addListener(this._updateView);
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
