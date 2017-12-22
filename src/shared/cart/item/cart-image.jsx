import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { loadImage } from '../../../helpers/image.helper';

import './cart-item.scss';

class CartImage extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div id='game-card'
                className='card cursor-pointer no-border'>
                <div className='text-center background-img-game no-border cart-item-background'>
                    <img
                        id='game-image'
                        className='card-img-top cart-item-image'
                        src={loadImage(this.props.image)} />
                </div>
            </div>
        )
    }
}

CartImage.propTypes = {
    image: PropTypes.string.isRequired
};

export default CartImage;