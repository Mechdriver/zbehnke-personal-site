var React = require('react');

class NavBar extends React.Component {
  render() {
    return (
      <nav id="nav-bar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#experience">Background</a></li>
          <li><a href="#interests-header">Interests</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    );
  }
};

module.exports = NavBar;
