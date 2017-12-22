import React, { Component } from 'react';
import PropTypes from 'prop-types';

import constants from '../../../constants/constants.json';

class CartPrices extends Component {

  constructor() {
    super();
    this.constants = constants;
  }

  render() {
    return (
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>
          <div className="row">
            <div className='col'>
              <span>{this.constants.subTotal}</span>
            </div>
            <div className='col'>
              <span id='subtotal-value'
                className='font-weight-bold'>
                {`R$ ${Math.abs(this.props.subtotal.toFixed(2))}`}
              </span>
            </div>
          </div>
        </li>
        <li className='list-group-item'>
          <div className="row">
            <div className='col'>
              <span>{this.constants.freight}</span>
            </div>
            <div className='col'>
              <span id='freight-value'
                className='font-weight-bold'>
                {`R$ ${Math.abs(this.props.freight.toFixed(2))}`}
              </span>
            </div>
          </div>
        </li>
        <li className='list-group-item'>
          <div className="row">
            <div className='col'>
              <span>{this.constants.total}</span>
            </div>
            <div className='col'>
              <span id='total-value'
                className='font-weight-bold'>
                {`R$ ${Math.abs(this.props.total.toFixed(2))}`}
              </span>
            </div>
          </div>
        </li>
      </ul>
    )
  }
}

CartPrices.propTypes = {
  total: PropTypes.number.isRequired,
  subtotal: PropTypes.number.isRequired,
  freight: PropTypes.number.isRequired,
};

export default CartPrices;