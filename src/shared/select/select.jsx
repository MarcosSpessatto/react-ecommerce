import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {

  constructor() {
    super();
  }

  renderOptions() {
    return this.props.options.map((option, index) => {
      return (
        <option key={index} className='option-game' value={option.value}>{option.text}</option>
      )
    });
  }

  render() {
    return (
      <select className="form-control"
        onChange={(event) => this.props.whenChangeSelected({ value: event.target.value })}
        id="selectGame">
        {
          this.renderOptions()
        }
      </select>
    )
  }
}

Select.propTypes = {
  whenChangeSelected: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired
};

export default Select;