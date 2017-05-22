var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./NavBar.jsx')
var Experience = require('./Experience.jsx');

var HomePage = React.createClass({
  render: function(){
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
      </div>
    );
  }
});

ReactDOM.render(
  <HomePage />,
  document.getElementById('root')
);
