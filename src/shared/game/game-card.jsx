import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { loadImage } from '../../helpers/image.helper';

import constants from '../../constants/constants.json';

import './game-card.scss';

export class GameCard extends Component {

    constructor() {
        super();
        this.state = { hover: false };
        this.constants = constants;
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

    renderCardInfos() {
        return this.state.hover
            ?
            <div>
                <p id='add-to-cart'
                    className='game-card-price card-text'>
                    {this.constants.addToCart}
                </p>
            </div>
            : <div>
                <p id='game-name'
                    className='card-text'>
                    {this.props.game.name}
                </p>
                <span id='game-price'
                    className='game-card-price'>
                    R$ {this.props.game.price}
                </span>
            </div>
    }

    whenAddGameToCart() {
        this.props.whenAddGameToCart(Object.assign({}, this.props.game));
    }

    render() {
        return (
            <div id='game-card'
                className='card no-border cursor-pointer game-card'
                onMouseEnter={this.whenMouseEnter.bind(this)}
                onMouseLeave={this.whenMouseLeave.bind(this)}
                onClick={this.whenAddGameToCart.bind(this)}>
                <div className='text-center background-img-game'>
                    <img
                        id='game-image'
                        className='card-img-top img-size'
                        src={loadImage(this.props.game.image)}
                        alt={this.props.game.name} />
                </div>
                <div id='card-body'
                    className='card-body text-center'>
                    {
                        this.renderCardInfos()
                    }

                </div>
            </div>
        )
    }
}

GameCard.propTypes = {
    game: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        score: PropTypes.number.isRequired
    }).isRequired,
    whenAddGameToCart: PropTypes.func.isRequired
};

export default GameCard;