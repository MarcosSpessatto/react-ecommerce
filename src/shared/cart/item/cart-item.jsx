import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CartImage from './cart-image';
import CartDescription from './cart-description';

import './cart-item.scss';

class CartItem extends Component {

    constructor() {
        super();
        this.state = { hover: false };
    }

    whenMouseEnter() {
        this.setState({
            hover: true
        });
    }

    whenMouseLeave() {
        this.setState({
            hover: false
        });
    }

    whenRemoveItem() {
        this.props.whenRemoveItem(this.props.item);
    }

    renderRemoveItem() {
        return this.state.hover
            ? <div id='remove-item'
                className='col-1 text-center remove-item'
                onClick={this.whenRemoveItem.bind(this)}>
                <span className='badge badge-primary'>X</span>
            </div>
            : '';
    }

    render() {
        return (
            <div id='cart-item'
                className='row cart-item'
                onMouseEnter={this.whenMouseEnter.bind(this)}
                onMouseLeave={this.whenMouseLeave.bind(this)}>
                <div className='col-4'>
                    <CartImage image={this.props.item.image} />
                </div>
                <div className='col-6'>
                    <CartDescription name={this.props.item.name} price={this.props.item.price} />
                </div>
                {
                    this.renderRemoveItem()
                }
            </div>

        )
    }
}

CartItem.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    }).isRequired,
    whenRemoveItem: PropTypes.func.isRequired
};

export default CartItem;