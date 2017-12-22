import * as types from './game.types';
import { filterByScoreDesc, filterByNameAsc, filterByPriceAsc } from './game-filter.helper';

export const filterGames = (criteria, array) => {
    const options = {
        'score': () => filterByScoreDesc(array),
        'price': () => filterByPriceAsc(array),
        'name': () => filterByNameAsc(array)
    };

    return {
        type: types.FILTER_GAMES,
        payload: { games: options[criteria.value]() }
    }
};

