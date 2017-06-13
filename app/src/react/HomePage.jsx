var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./NavBar.jsx')
var Experience = require('./Experience.jsx');
var InterestBox = require('./InterestBox.jsx');
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
        <Experience />
        <div id="interests-grid">
          <span id="interests-header">Interests</span>
          <ul id="interests-list">
            <li><InterestBox name="Github" iconClass="fa fa-github fa-5x" link="https://github.com/Mechdriver"/></li> {/*Github*/}
            <li><InterestBox name="Steam" iconClass="fa fa-steam fa-5x" link="http://steamcommunity.com/id/mechdriver/"/></li> {/*Steam Account*/}
            <li><InterestBox name="PokéDex" iconClass="fa fa-paw fa-5x" link="https://pokedextracker.com/u/zbehnke/living-dex"/></li> {/*Pokemon Living Dex*/}
            <li><InterestBox name="LinkedIn" iconClass="fa fa-linkedin-square fa-5x" link="https://www.linkedin.com/in/zachbehnke/"/></li> {/*LinkedIn*/}
            <li><InterestBox name="Symmetric Strength" iconClass="fa fa-universal-access fa-5x" link="https://symmetricstrength.com/lifter/mechdriver"/></li> {/*Symmetric Strength*/}
            <li><InterestBox name="Spotify" iconClass="fa fa-spotify fa-5x" link="https://open.spotify.com/user/mechdriver"/></li> {/*Spotify Account*/}
          </ul>
        </div>
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
