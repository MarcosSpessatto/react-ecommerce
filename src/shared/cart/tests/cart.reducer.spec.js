import { expect } from 'chai';
import * as types from '../cart.types';
import cartReducer from '../cart.reducer';

describe('Cart Reducer', () => {

    describe('INITIAL STATE', () => {

        test('should have INITIAL_STATE with cart empty', () => {
            expect(cartReducer(undefined, {})).to.be.eql({ cart: [], freight: 0, total: 0, subtotal: 0 });
        });

    });

    describe('ADD GAME TO CART', () => {

        test('should add an item inside cart when dispatch action', () => {
            expect(cartReducer({ cart: [{ id: 1 }] }, {
                type: types.ADD_GAME_TO_CART,
                payload: { game: { id: 2 } }
            })).to.be.eql({ cart: [{ id: 1 }, { id: 2 }] });
        });

    });

    describe('REMOVE GAME FROM CART', () => {

        test('should remove game from cart when dispatch action', () => {
            expect(cartReducer({ cart: [{ positionInCart: 1 }, { positionInCart: 2 }] }, {
                type: types.REMOVE_GAME_FROM_CART,
                payload: { game: { positionInCart: 1 } }
            })).to.be.eql({ cart: [{ positionInCart: 2 }] });
        });

    });

    describe('CALCULATE FREIGHT', () => {

        test('should update value of freight', () => {
            expect(cartReducer({ freight: 23 }, {
                type: types.CALCULATE_FREIGHT,
                payload: { freight: 46 }
            })).to.be.eql({ freight: 46 });
        });

    });

    describe('CALCULATE TOTAL AND SUBTOTAL', () => {

        test('should update value of total and subtotal', () => {
            expect(cartReducer({ total: 23, subtotal: 23 }, {
                type: types.CALCULATE_TOTAL_AND_SUBTOTAL,
                payload: { total: 46, subtotal: 46 }
            })).to.be.eql({ total: 46, subtotal: 46 });
        });

    });
});