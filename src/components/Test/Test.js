import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './styles.css';

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  onInputChange(evt) {
    this.setState({ value: evt.target.value });
  }

  submit() {
    this.props.changeName(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    const {
      name,
    } = this.props;

    return (
      <div>
        <p className={css.style}>{name}</p>
        <input value={this.state.value} onChange={this.onInputChange} />
        <button onClick={this.submit}>Click me!</button>
      </div>
    );
  } 
}
    
Test.propTypes = {
  name: PropTypes.string.isRequired,
};