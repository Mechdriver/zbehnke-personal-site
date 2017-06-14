var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./NavBar.jsx')
var Background = require('./Background.jsx');
var Interests = require('./Interests.jsx')
var ContactForm = require('./ContactForm.jsx');

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div>
          <p id="intro">
            <span id="my-name">Zachary Behnke</span>
            <br/>
            <span id="summary">I like programming, Pokémon, and power lifting.</span>
          </p>
        </div>
        <Background />
        <Interests />
        <div id="contact-section">
          <p>
            <span id="contact-header">Contact</span>
          </p>
          <ContactForm />
        </div>
      </div>
    );
  }
};

ReactDOM.render(
  <HomePage />,
  document.getElementById('root')
);
