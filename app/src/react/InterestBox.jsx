var React = require('react');

class InterestBox extends React.Component {
  render() {
    return (
      <div id="interest-box">
        <div id="interest-background">
          <a href={this.props.link} target="_blank">
            <i className={this.props.iconClass} aria-hidden="true"></i>
            <span>{this.props.name}</span>
          </a>
      </div>
      </div>
    );
  }
};

module.exports = InterestBox;
