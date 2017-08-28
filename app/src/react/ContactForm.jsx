let React = require('react');
let _ = require('lodash');

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '',
                  email: '',
                  message: '',
                  nameId: 'contact-input',
                  emailId: 'contact-input',
                  messageId: 'message-input',
                  successMessageId: 'text-hidden',
                  nameError: '',
                  emailError: '',
                  messageError: ''
                };

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
    let globalThis = this;
    let payload = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    globalThis.setState({successMessageId: 'text-hidden'})

    let data = new FormData();
    data.append("json", JSON.stringify(payload));
    let errors = {};

    if (!this.state.name || !this.nameIsValid(this.state.name)) {
      errors.name = 'Please enter a valid name';
    }

    if (!this.state.email || !this.emailIsValid(this.state.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!this.state.message) {
      errors.message = 'Please enter a message';
    }

    if (!_.isEmpty(errors)) {
      this.displayErrors(errors);
    } else {
      fetch('/submit/', {
        method: "POST",
        body: data
      }).then(function(response) {
        return response.json();
      }).then(function(errors) {
        globalThis.displayErrors(errors);

        if (!data.name && !data.email && !data.message) {
          globalThis.setState({successMessageId: 'text-visible'})
        }
      });
    }

    event.preventDefault();
  }

  nameIsValid(input) {
    if (!input) {
      return false;
    }

    return input.match(/[0-9]/g) ? false : true;
  }

  emailIsValid(input) {
    if (input.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
      return true;
    }

    return false;
  }

  displayErrors(errors) {
    if (errors.name) {
      this.setState({nameId: 'contact-input-error'});
      this.setState({nameError: errors.name});
    } else {
      this.setState({nameId: 'contact-input'});
      this.setState({nameError: ''});
    }

    if (errors.email) {
      this.setState({emailId: 'contact-input-error'});
      this.setState({emailError: errors.email});
    } else {
      this.setState({emailId: 'contact-input'});
      this.setState({emailError: ''});
    }

    if (errors.message) {
      this.setState({messageId: 'message-input-error'});
      this.setState({messageError: errors.message});
    } else {
      this.setState({messageId: 'message-input'});
      this.setState({messageError: ''});
    }
  }

  render() {
    return (
      <div id="contact-form">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label className="contact-label">
              Name:
            </label>
            <input className={this.state.nameId} type="text" value={this.state.name} onChange={this.handleNameChange} />
            <label className="error-label">
              <strong>{this.state.nameError}</strong>
            </label>
          </div>
          <div>
            <label className="contact-label">
              Email:
            </label>
            <input className={this.state.emailId} type="text" value={this.state.email} onChange={this.handleEmailChange} />
              <label className="error-label">
                <strong>{this.state.emailError}</strong>
              </label>
          </div>
          <div>
            <label className="contact-label">
              Message:
            </label>
            <textarea className={this.state.messageId} value={this.state.message} onChange={this.handleMessageChange} />
              <label className="error-label">
                <strong>{this.state.messageError}</strong>
              </label>
          </div>
          <div className="button-box">
            <input className="submit-button" type="submit" value="Send" />
            <label className={this.state.successMessageId}>
                Message sent
            </label>
          </div>
        </form>
      </div>
    );
  }
}

module.exports = ContactForm;
