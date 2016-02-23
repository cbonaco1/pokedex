var React = require('react');
var PokemonStore = require('../stores/pokemonStore');
var APIUtils = require('../util/apiUtil');
var ToyIndex = require('./toyIndex');

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
    APIUtils.fetchPokemon(newProps.params.id);
  },

  _updateView: function () {
    this.setState({pokemon: this.getStateFromStore() });
  },

  componentWillMount: function () {
    this.listenerToken = PokemonStore.addListener(this._updateView);
  },

  componentWillUnmount: function() {
    this.listenerToken.remove();
  },

  render: function () {
    var pokemon = this.state.pokemon;
    var details;
    var toys = "";
    if (pokemon) {
      details =
        <div className="detail">
          <p>{pokemon.name}</p>
          <img src={pokemon.image_url} />
        </div>;
      toys = <ToyIndex toys={pokemon.toys} />;
    } else {
      details = <div className="detail"></div>;
    }

    return(
      <div>
        <div className="pokemon-detail-pane">
          {details}
        </div>
        <h2>Toys</h2>
        {toys}
      </div>
    );
  }
});

module.exports = PokemonDetail;
