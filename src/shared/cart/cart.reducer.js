import * as types from './cart.types';
import { handleActions } from 'redux-actions';
import { cloneArray } from '../../helpers/utils.helper';

const INITIAL_STATE = {
    cart: [],
    total: 0,
    freight: 0,
    subtotal: 0
};

const addGameToCart = (state, action) => {
    return {
        ...state,
        cart: state.cart.concat(action.payload.game)
    }
};

const removeGameFromCart = (state, action) => {
    const gameForRemove = action.payload.game;

    return {
        ...state,
        cart: cloneArray(state.cart).filter(item => item.positionInCart !== gameForRemove.positionInCart)
    }
};

const calculateFreight = (state, action) => {
    return {
        ...state,
        freight: action.payload.freight
    }
};

const calculateTotalAndSubtotal = (state, action) => {
    return {
        ...state,
        total: action.payload.total,
        subtotal: action.payload.subtotal
    }
};


export default handleActions({
    [types.ADD_GAME_TO_CART]: addGameToCart,
    [types.REMOVE_GAME_FROM_CART]: removeGameFromCart,
    [types.CALCULATE_FREIGHT]: calculateFreight,
    [types.CALCULATE_TOTAL_AND_SUBTOTAL]: calculateTotalAndSubtotal
}, INITIAL_STATE);
