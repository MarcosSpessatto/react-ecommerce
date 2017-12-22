import * as types from './game.types';
import { handleActions } from 'redux-actions';
import { filterByPriceAsc } from './game-filter.helper';

import mock from '../../constants/mock.json';

const INITIAL_STATE = {
    games: filterByPriceAsc(mock)
};

const filterGames = (state, action) => {
    return {
        ...state,
        games: action.payload.games
    }
};

export default handleActions({
    [types.FILTER_GAMES]: filterGames
}, INITIAL_STATE);