import { expect } from 'chai';
import * as actions from '../cart.actions';
import * as types from '../cart.types';
import * as cartService from '../cart.service';
import sinon from 'sinon';

describe('Cart Actions', () => {

    describe('#addGameToCart', () => {
        test('should create an action to add game to cart', () => {
            const expectedAction = {
                type: types.ADD_GAME_TO_CART,
                payload: { game: { id: 1 } }
            };
            expect(actions.addGameToCart({ id: 1 })).to.be.eql(expectedAction);
        });
    });

    describe('#removeGameFromCart', () => {
        test('should create an action to remove game from cart', () => {
            const expectedAction = {
                type: types.REMOVE_GAME_FROM_CART,
                payload: { game: { id: 1 } }
            };
            expect(actions.removeGameFromCart({ id: 1 })).to.be.eql(expectedAction);
        });
    });

    describe('#calculateFreight', () => {
        describe('when add', () => {
            test('should create an action to calculate freight with calculated value', () => {
                sinon.stub(cartService, 'itemAddedCalculateFreight').returns(200);

                const expectedAction = {
                    type: types.CALCULATE_FREIGHT,
                    payload: { freight: 200 }
                };
                expect(actions.calculateFreight(
                    {
                        actualFreight: 120,
                        purchaseValue: 200,
                        item: { price: 125 },
                        action: 'add'
                    })).to.be.eql(expectedAction);
            });
        });

        describe('when remove', () => {
            test('should create an action to calculate freight with calculated value', () => {
                sinon.stub(cartService, 'itemRemovedFreight').returns(200);

                const expectedAction = {
                    type: types.CALCULATE_FREIGHT,
                    payload: { freight: 200 }
                };
                expect(actions.calculateFreight(
                    {
                        itemsQuantity: 4,
                        purchaseValue: 200,
                        item: { price: 125 },
                        action: 'remove'
                    })).to.be.eql(expectedAction);
            });
        });
    });

    describe('#calculateTotalAndSubtotal', () => {
        describe('when add', () => {
            test('should create an action to calculate total and subtotal with calculated value', () => {
                sinon.stub(cartService, 'itemAddedPurchaseValue').returns(200);

                const expectedAction = {
                    type: types.CALCULATE_TOTAL_AND_SUBTOTAL,
                    payload: { total: 200, subtotal: 200 }
                };
                expect(actions.calculateTotalAndSubtotal(
                    {
                        purchaseValue: 200,
                        item: { price: 125 },
                        action: 'add'
                    })).to.be.eql(expectedAction);
            });
        });

        describe('when remove', () => {
            test('should create an action to calculate total and subtotal with calculated value', () => {
                sinon.stub(cartService, 'itemRemovedPurchaseValue').returns(200);

                const expectedAction = {
                    type: types.CALCULATE_TOTAL_AND_SUBTOTAL,
                    payload: { total: 200, subtotal: 200 }
                };
                expect(actions.calculateTotalAndSubtotal(
                    {
                        purchaseValue: 200,
                        item: { price: 125 },
                        action: 'remove'
                    })).to.be.eql(expectedAction);
            });
        });
    });
});
