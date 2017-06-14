var React = require('react');
var ReactDOM = require('react-dom');
var InterestBox = require('./InterestBox.jsx');

class Interests extends React.Component {
  render() {
    return (
      <div id="interests-section">
        <span id="interests-header">Interests</span>
        <ul id="interests-list">
          <li><InterestBox name="Github" iconClass="fa fa-github fa-5x" aria-hidden="true" link="https://github.com/Mechdriver"/></li> {/*Github*/}
          <li><InterestBox name="Steam" iconClass="fa fa-steam fa-5x" aria-hidden="true" link="http://steamcommunity.com/id/mechdriver/"/></li> {/*Steam Account*/}
          <li><InterestBox name="PokéDex" iconClass="fa fa-paw fa-5x" aria-hidden="true" link="https://pokedextracker.com/u/zbehnke/living-dex"/></li> {/*Pokemon Living Dex*/}
          <li><InterestBox name="LinkedIn" iconClass="fa fa-linkedin-square fa-5x" aria-hidden="true" link="https://www.linkedin.com/in/zachbehnke/"/></li> {/*LinkedIn*/}
          <li><InterestBox name="Strength" iconClass="fa fa-user fa-5x" aria-hidden="true" link="https://symmetricstrength.com/lifter/mechdriver"/></li> {/*Symmetric Strength*/}
          <li><InterestBox name="Spotify" iconClass="fa fa-spotify fa-5x" aria-hidden="true" link="https://open.spotify.com/user/mechdriver"/></li> {/*Spotify Account*/}
        </ul>
      </div>
    );
  }
};

module.exports = Interests;
