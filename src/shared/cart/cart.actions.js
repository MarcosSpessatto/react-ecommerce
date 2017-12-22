import * as types from './cart.types';
import {
    itemAddedCalculateFreight,
    itemRemovedFreight,
    itemAddedPurchaseValue,
    itemRemovedPurchaseValue
} from './cart.service';

export const addGameToCart = game => {
    return {
        type: types.ADD_GAME_TO_CART,
        payload: { game }
    }
};

export const removeGameFromCart = game => {
    return {
        type: types.REMOVE_GAME_FROM_CART,
        payload: { game }
    }
};

export const calculateFreight = ({ itemsQuantity, purchaseValue, item, action }) => {
    const actions = {
        'add': () => itemAddedCalculateFreight({ itemsQuantity, item, purchaseValue }),
        'remove': () => itemRemovedFreight({ itemsQuantity, item, purchaseValue })
    };
    return {
        type: types.CALCULATE_FREIGHT,
        payload: {
            freight: actions[action]()
        }
    }
};

export const calculateTotalAndSubtotal = ({ purchaseValue, item, action }) => {
    const actions = {
        'add': () => itemAddedPurchaseValue({ item, purchaseValue }),
        'remove': () => itemRemovedPurchaseValue({ item, purchaseValue })
    };
    return {
        type: types.CALCULATE_TOTAL_AND_SUBTOTAL,
        payload: {
            total: actions[action](),
            subtotal: actions[action]()
        }
    }
};