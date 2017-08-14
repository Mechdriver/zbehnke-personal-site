let React = require('react');

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
    /*if (nameIsValid(this.state.name)) {
      this.setState({nameId: 'contact-input'});
      alert("Haha! Hey this worked. Neat. Don't forget to email yourself.");
    } else {
      this.setState({nameId: 'contact-input-error'});
    }

    if (!inputIsValid(this.state.name)) {

    }*/
    let globalThis = this;
    let payload = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    let data = new FormData();
    data.append("json", JSON.stringify(payload));

    fetch('/submit/', {
      method: "POST",
      body: data
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        if (data.name) {
          globalThis.setState({nameId: 'contact-input-error'});
          globalThis.setState({nameError: data.name});
        } else {
          globalThis.setState({nameId: 'contact-input'});
          globalThis.setState({nameError: ''});
        }

        if (data.email) {
          globalThis.setState({emailId: 'contact-input-error'});
          globalThis.setState({emailError: data.email});
        } else {
          globalThis.setState({emailId: 'contact-input'});
          globalThis.setState({emailError: ''});
        }

        if (data.message) {
          globalThis.setState({messageId: 'message-input-error'});
          globalThis.setState({messageError: data.message});
        } else {
          globalThis.setState({messageId: 'message-input'});
          globalThis.setState({messageError: ''});
        }

        //TODO: Do a confirmed message or something
        if (!data.name && !data.email && !data.message) {
          globalThis.setState({successMessageId: 'text-visible'})
        }
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
                Message sent. You will receive a confirmation email shortly.
            </label>
          </div>
        </form>
      </div>
    );
  }
}

module.exports = ContactForm;
