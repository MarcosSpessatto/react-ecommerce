import { expect } from 'chai';
import * as actions from '../game.actions';
import * as types from '../game.types';

describe('Game Actions', () => {

    describe('#filterGames', () => {

        it('should create an action to filter games when filter is price', () => {
            const expectedAction = {
                type: types.FILTER_GAMES,
                payload: { games: [] }
            };
            expect(actions.filterGames({ value: 'price' }, [])).to.be.eql(expectedAction);
        });

        it('should create an action to filter games when filter is score', () => {
            const expectedAction = {
                type: types.FILTER_GAMES,
                payload: { games: [] }
            };
            expect(actions.filterGames({ value: 'score' }, [])).to.be.eql(expectedAction);
        });

        it('should create an action to filter games when filter is name', () => {
            const expectedAction = {
                type: types.FILTER_GAMES,
                payload: { games: [] }
            };
            expect(actions.filterGames({ value: 'name' }, [])).to.be.eql(expectedAction);
        });
    });


});