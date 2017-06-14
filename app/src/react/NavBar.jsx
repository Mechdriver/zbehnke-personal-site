var React = require('react');

class NavBar extends React.Component {
  render() {
    return (
      <nav id="nav-bar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#background-area">Background</a></li>
          <li><a href="#interests-section">Interests</a></li>
          <li><a href="#contact-section">Contact</a></li>
        </ul>
      </nav>
    );
  }
};

module.exports = NavBar;
