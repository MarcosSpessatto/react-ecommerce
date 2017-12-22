import { combineReducers } from 'redux';

import GameReducer from '../shared/game/game.reducer';
import CartReducer from '../shared/cart/cart.reducer';

const rootReducer = combineReducers({
    game: GameReducer,
    cart: CartReducer
});

export default rootReducer;