var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./NavBar.jsx');
var Splash = require('./Splash.jsx');
var Background = require('./Background.jsx');
var Interests = require('./Interests.jsx')
var ContactForm = require('./ContactForm.jsx');

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Splash />
        <div className="content-container">
          <Background />
          <Interests />
          <ContactForm />
        </div>
        <div className="footer">
          Created with Flask, React.js, and Pure.css.
        </div>
      </div>
    );
  }
};

ReactDOM.render(
  <HomePage />,
  document.getElementById('root')
);
