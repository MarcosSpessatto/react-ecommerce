import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterGames } from '../../shared/game/game.actions';
import { addGameToCart, calculateFreight, calculateTotalAndSubtotal } from '../../shared/cart/cart.actions';

import PageTitle from '../../shared/page-title/page-title';
import Select from '../../shared/select/select';
import GameCard from '../../shared/game/game-card';
import Cart from '../../shared/cart/cart';

import constants from '../../constants/constants.json';
import lists from '../../constants/lists.json';

import './home.scss';

export class Home extends Component {

    constructor() {
        super();
        this.constants = constants;
        this.lists = lists;
    }

    whenAddGameToCart(item) {
        const getPositionInCart = () => this.props.cart.cart.length;
        const addedItemInfo = {
            purchaseValue: this.props.cart.total,
            item,
            action: 'add'
        };
        item.positionInCart = getPositionInCart();
        this.props.addGameToCart(item);
        this.props.calculateFreight({
            itemsQuantity: getPositionInCart() + 1,
            ...addedItemInfo
        });
        this.props.calculateTotalAndSubtotal({
            ...addedItemInfo
        });
    }

    renderCards() {
        return this.props.game.games.map((game, index) => {
            return (
                <div key={index}
                    className='col-4 game-card-item'>
                    <GameCard
                        whenAddGameToCart={this.whenAddGameToCart.bind(this)}
                        game={game} />
                </div>
            );
        });
    }

    filterGames(criteria) {
        this.props.filterGames(criteria, this.props.game.games);
    }

    render() {
        return (
            <div className='row'>
                <div className='col-9'>
                    <div className='row'>
                        <div className='col'>
                            <PageTitle title={this.constants.games} />
                        </div>
                        <div className='col text-right'>
                            <Select options={this.lists.filters}
                                whenChangeSelected={this.filterGames.bind(this)} />
                        </div>
                        <div id='game-cards-list'
                            className='row cards-margin'>
                            {
                                this.renderCards()
                            }
                        </div>
                    </div>
                </div>
                <div className='col-3'>
                    <Cart />
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    game: state.game,
    cart: state.cart
});

const mapDispatchToProps = dispatch => bindActionCreators({
    filterGames,
    addGameToCart,
    calculateFreight,
    calculateTotalAndSubtotal
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);