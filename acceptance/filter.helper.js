import { filterByPriceAsc, filterByScoreDesc, filterByNameAsc } from '../src/shared/game/game-filter.helper';
import mock from '../src/constants/mock';

export const getNamesInPriceOrder = () => {
    return filterByPriceAsc(mock).map(item => item.name);
};

export const getNamesInScoreOrder = () => {
    return filterByScoreDesc(mock).map(item => item.name);
};

export const getNamesInNameOrder = () => {
    return filterByNameAsc(mock).map(item => item.name);
};

