var React = require('react');

var InterestBox = React.createClass({
  render: function() {
    return (
      <div id="interest-box">
        <a href={this.props.link} target="_blank">
          <i className={this.props.iconClass} aria-hidden="true"></i>
          <span>{this.props.name}</span>
        </a>
      </div>
    );
  }
});

module.exports = InterestBox;
