var React = require('react');

var NavBar = React.createClass({
  render: function() {
    return (
      <nav id="nav-bar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Experience</a></li>
          <li><a href="#">Interests</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    );
  }
});

module.exports = NavBar;
