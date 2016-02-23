var React = require('react');
var ToyIndexItem = require('./toyIndexItem');

var ToyIndex = React.createClass({

  render: function() {
    //Return a ToyIndexItem for each toy
    var toys = "";

    if(this.props.toys){
      toys = this.props.toys.map(function(toy){
        return <ToyIndexItem toy={toy} />
      });
    }

    return(
      <div>
        {toys}
      </div>
    )

  }
});


module.exports = ToyIndex;
