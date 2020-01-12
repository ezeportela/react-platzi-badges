import React, { Component } from 'react';
import TextInput from './TextInput';

class BadgeForm extends Component {
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('the badge has been submitted!');
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <TextInput
            label="First Name"
            name="firstName"
            onChange={this.props.onChange}
            value={this.props.firstName}
          />

          <TextInput
            label="Last Name"
            name="lastName"
            onChange={this.props.onChange}
            value={this.props.lastName}
          />

          <TextInput
            label="Email"
            name="email"
            onChange={this.props.onChange}
            value={this.props.email}
          />

          <TextInput
            label="Job Title"
            name="jobTitle"
            onChange={this.props.onChange}
            value={this.props.jobTitle}
          />

          <TextInput
            label="Twitter"
            name="twitter"
            onChange={this.props.onChange}
            value={this.props.twitter}
          />

          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
