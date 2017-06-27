import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlayerInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: ''
    }
    // binding functions in here so 'this' referes to the right thing
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    let value = event.target.value;
    this.setState({
      username: value
    })
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit(
      this.props.id,
      this.state.username
    )
  }
  render(){
    return (
      <div>
        <form className='column' onSubmit={this.handleSubmit}>
          <label htmlFor='username' className='header'>
            {this.props.label}
          </label>
          <input
            type='text'
            id='username'
            placeholder='github username'
            autoComplete='off'
            value={this.state.username}
            onChange={this.handleChange}
          />
          <button
            className='button'
            type='submit'
            disabled={!this.state.username}>
              Submit
          </button>
        </form>
      </div>
    );
  }
}
// using prop types because javascript isn't strongly typed
PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}
export default PlayerInput;