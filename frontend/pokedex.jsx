var React = require('react');
var ReactDOM = require('react-dom');
var PokemonsIndex = require('./components/pokemonsIndex');
var PokemonDetail = require('./components/pokemonDetail');
var ToyIndex = require('./components/toyIndex');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var App = require('./components/app');

var Pokedex = React.createClass({
  render: function(){
      return(
        <Router>
          <Route path="/" component={App}>
            <Route path="pokemon/:id" component={PokemonDetail}>
              <Route path="toys/:toyId" component={ToyIndex} >
              </Route>
            </Route>
          </Route>
        </Router>
      );
  }
});

document.addEventListener("DOMContentLoaded", function(event){
  ReactDOM.render(<Pokedex />, document.getElementById("root"));
});
