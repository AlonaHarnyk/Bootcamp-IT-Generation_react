import { Component } from 'react';

export default class UpdateForm extends Component {
  state = {
    name: this.props.userToUpdate.name,
    email: this.props.userToUpdate.email,
    url: this.props.userToUpdate.avatar,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
      event.preventDefault();
      console.log(8769879)
    this.props.updateUser({...this.props.userToUpdate, ...this.state});
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
        <button>Update</button>
      </form>
    );
  }
}
