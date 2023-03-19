import CSS from './Filter.module.css';
import PropTypes from 'prop-types';
import React from 'react';

export class Filter extends React.Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  };

  render() {
    return (
      <label className={CSS.label}>
        Find contact by name
        <input
          className={CSS.input}
          type="text"
          name="filter"
          value={this.props.value}
          onChange={this.props.handleChange}
        />
      </label>
    );
  }
}
