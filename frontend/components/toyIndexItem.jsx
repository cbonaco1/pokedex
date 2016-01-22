var React = require('react');

var ToyIndexItem = React.createClass({

  render: function() {
    //return li.toy-list-item with name, happiness, and price
    var toy = this.props.toy;
    return <li className="toy-list-item">{toy.name} - {toy.happiness} - {toy.price}</li>
  }
});

module.exports = ToyIndexItem;
