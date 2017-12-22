import { expect } from 'chai';
import * as types from '../game.types';
import gameReducer from '../game.reducer';
import { filterByPriceAsc } from '../game-filter.helper';
import mock from '../../../constants/mock.json';

describe('Game Reducer', () => {

    describe('INITIAL STATE', () => {

        test('should have INITIAL_STATE with games ordered by price', () => {
            expect(gameReducer(undefined, {})).to.be.eql({ games: filterByPriceAsc(mock) });
        });

    });

    describe('FILTER GAMES', () => {

        test('should set games when dispatch FILTER_GAMES action', () => {
            expect(gameReducer([], {
                type: types.FILTER_GAMES,
                payload: { games: [] }
            })).to.be.eql({ games: [] });
        });

    });

});