import React, { Component } from 'react';
import { supabase } from "../supabaseClient";
class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: '',
      error: null,
    };
  }

  handleChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Request a password reset email from Supabase
      const { data, error } = await supabase.auth.resetPasswordForEmail(
        this.state.email
      );

      if (error) {
        throw error;
      }

      this.setState({
        message: 'Password reset email sent successfully!',
        error: null,
      });
    } catch (error) {
      this.setState({
        message: '',
        error: 'An error occurred. Please try again later.',
      });
    }
  };

  render() {
    return (
      <div>
        <h2>Forgot Password</h2>
        {this.state.message && <div className="success">{this.state.message}</div>}
        {this.state.error && <div className="error">{this.state.error}</div>}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <button type="submit">Reset Password</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ForgotPassword;
