import { Component } from 'react';

export default class AddForm extends Component {
  state = {
    name: '',
    email: '',
    url: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addUser({ ...this.state });
    this.setState({ name: '', email: '', url: '' });
  };

  render() {
    const { name, email, url } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={name}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={email}
          />
        </label>
        <label>
          Avatar:
          <input
            type="url"
            name="url"
            onChange={this.handleChange}
            value={url}
          />
        </label>
        <button>Save</button>
      </form>
    );
  }
}
