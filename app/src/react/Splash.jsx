var React = require('react');

class Splash extends React.Component {
  render() {
    return (
      <div className="splash-container">
        <div className="splash">
          <h1 className="splash-head">Zachary Behnke</h1>
          <p className="splash-subhead">I like programming, Pokémon, and power lifting.</p>
        </div>
      </div>
    );
  }
};

module.exports = Splash;
