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
    if (this.state.name === '') {
      this.setState({nameId: 'contact-input-error'});
    } else {
      this.setState({nameId: 'contact-input'});
      alert("Haha! Hey this worked. Neat. Don't forget to email yourself." + '\n' + this.state.name + '\n' + this.state.email + '\n' + this.state.message);
    }
    {/*TODO: Send email*/}
    event.preventDefault();
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
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}

module.exports = ContactForm;
