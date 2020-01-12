import React, { Component } from 'react';

class BadgeForm extends Component {

  handleChange = (e) => {
    console.log(e);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('the badge has been submitted!')
  }

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input type="text" onChange={this.handleChange} className="form-control" name="firstName" />
          </div>

          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
