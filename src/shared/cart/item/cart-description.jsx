import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartDescription extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <span id='item-name'>{this.props.name}</span>
        <br />
        <span id='item-price'
          className='font-weight-bold'>
          {`R$ ${this.props.price}`}
        </span>
      </div>
    )
  }
}

CartDescription.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default CartDescription;