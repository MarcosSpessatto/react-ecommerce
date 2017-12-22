import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeGameFromCart, calculateFreight, calculateTotalAndSubtotal } from './cart.actions';

import CartItem from './item/cart-item';
import CartPrices from './prices/cart-prices';

import { loadImage } from '../../helpers/image.helper';

import constants from '../../constants/constants.json';

import './cart.scss';

export class Cart extends Component {

    constructor() {
        super();
        this.constants = constants;
    }

    whenRemoveItem(item) {
        const removedItemInfos = {
            purchaseValue: this.props.cart.total,
            item,
            action: 'remove'
        };
        this.props.removeGameFromCart(item);
        this.props.calculateFreight({
            itemsQuantity: this.props.cart.cart.length - 1,
            ...removedItemInfos
        });
        this.props.calculateTotalAndSubtotal({
            ...removedItemInfos
        });
    }

    renderItemsOnCart() {
        return this.props.cart.cart.map((item, index) => {
            return (
                <CartItem key={index}
                    item={item}
                    whenRemoveItem={this.whenRemoveItem.bind(this)} />
            )
        })
    }

    renderEmptyMessage() {
        return (
            <div id='empty-cart'
                className='text-center box-empty-message'>
                <div>
                    <img src={loadImage('cart.svg')} alt='Carrinho Vazio' />
                </div>
                <div className='empty-message'>
                    <span>{this.constants.emptyCartMessage}</span>
                </div>
            </div>

        );
    }

    renderWordItems() {
        const hasOnlyOneItemInCart = 1;

        return this.props.cart.cart.length === hasOnlyOneItemInCart
            ? 'Item'
            : 'Itens';
    }

    renderCartItems() {
        return this.props.cart.cart.length
            ? <div id='cart-item'>
                <div className='card-text cursor-pointer'>
                    {
                        this.renderItemsOnCart()
                    }
                </div>
                <CartPrices freight={this.props.cart.freight}
                    subtotal={this.props.cart.subtotal}
                    total={this.props.cart.total} />
                <div className='card-body'>
                    <button className='btn btn-primary buy-button'>{this.constants.endPurchase}</button>
                </div>
            </div>
            : this.renderEmptyMessage();
    }

    renderItemsQuantity() {
        return this.props.cart.cart.length
            ? <span id='items-quantity'>{`(${this.props.cart.cart.length} ${this.renderWordItems()})`}</span>
            : '';
    }

    render() {
        return (
            <div className='card'>
                <div className='card-body'>
                    <div className='card-title'>
                        <h5 className='float-left'>{this.constants.cart}</h5>
                        {
                            this.renderItemsQuantity()
                        }
                    </div>
                </div>
                {
                    this.renderCartItems()
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart
});

const mapDispatchToProps = dispatch => bindActionCreators({
    removeGameFromCart,
    calculateFreight,
    calculateTotalAndSubtotal
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);