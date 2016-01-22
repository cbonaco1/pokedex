var React = require('react');
var History = require('react-router').History;

var PokemonIndexItem = React.createClass({
  mixins: [History],

  showDetail: function (e) {
    e.preventDefault();

    var stateData = null;
    this.history.pushState(stateData, "/pokemon/" + this.props.pokemon.id);
  },

  render: function() {
    return (<li className="poke-list-item" onClick={this.showDetail}>
      {this.props.pokemon.name}: {this.props.pokemon.poke_type}
    </li>);
  }
});

module.exports = PokemonIndexItem;
