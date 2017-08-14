var React = require('react');

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '',
                  email: '',
                  message: '',
                  nameId: 'contact-input',
                  emailId: 'contact-input',
                  messageId: 'message-area'};

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handleMessageChange(event) {
    this.setState({message: event.target.value});
  }

  handleSubmit(event) {
    /*if (nameIsValid(this.state.name)) {
      this.setState({nameId: 'contact-input'});
      alert("Haha! Hey this worked. Neat. Don't forget to email yourself.");
    } else {
      this.setState({nameId: 'contact-input-error'});
    }

    if (!inputIsValid(this.state.name)) {

    }*/
    var payload = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    var data = new FormData();
    data.append("json", JSON.stringify(payload));

    fetch('/submit/', {
      method: "POST",
      body: data
    }).then(function(response) {
        return response.json()
    }).then(function(data) {
        console.log(data.error);
    });

    event.preventDefault();
  }

  nameIsValid(input) {
    return input.match(/[0-9]/g) ? false : true;
  }

  emailIsValid(input) {

  }

  render() {
    return (
      <div id="contact-form">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label id="contact-label">
              Name:
            </label>
            <input id={this.state.nameId} type="text" value={this.state.name} onChange={this.handleNameChange} />
          </div>
          <div>
            <label id="contact-label">
              Email:
            </label>
            <input id={this.state.emailId} type="text" value={this.state.email} onChange={this.handleEmailChange} />
          </div>
          <div>
            <label id="contact-label">
              Message:
            </label>
            <textarea id={this.state.messageId} value={this.state.message} onChange={this.handleMessageChange} />
          </div>
          <div className="button-box">
            <input className="submit-button" type="submit" value="Send" />
          </div>
        </form>
      </div>
    );
  }
}

module.exports = ContactForm;
