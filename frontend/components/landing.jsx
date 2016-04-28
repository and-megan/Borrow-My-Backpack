var React = require('react');
var History = require('react-router').History;
var hashHistory = require('react-router').hashHistory;

//components
var LoginForm = require('./login_form');

var Landing = React.createClass({


  render: function() {

    return (
      <div>
        {this.props.children}
      </div>
    );
  }

});

module.exports = Landing;
