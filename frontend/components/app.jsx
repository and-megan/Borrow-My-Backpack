var React = require('react');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Borrow My Backpack</h1>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
