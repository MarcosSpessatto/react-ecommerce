import { expect } from 'chai';
import { filterByNameAsc, filterByPriceAsc, filterByScoreDesc } from '../game-filter.helper';

describe('Game Filter helper', () => {

    describe('#filterByPriceAsc', () => {
        const array = [
            {
                price: 10
            },
            {
                price: 43
            },
            {
                price: 12
            }
        ];
        const expetedArray = [
            {
                price: 10
            },
            {
                price: 12
            },
            {
                price: 43
            }
        ];

        test('should filter array Asc by price when call the function', () => {
            const filteredArray = filterByPriceAsc(array);

            expect(filteredArray).to.be.eql(expetedArray);
        });

    });

    describe('#filterByNameAsc', () => {
        const array = [
            {
                name: 'taylor'
            },
            {
                name: 'billy'
            },
            {
                name: 'carl'
            }
        ];
        const expetedArray = [
            {
                name: 'billy'
            },
            {
                name: 'carl'
            },
            {
                name: 'taylor'
            }
        ];

        test('should filter array Asc by name when call the function', () => {
            const filteredArray = filterByNameAsc(array);

            expect(filteredArray).to.be.eql(expetedArray);
        });

    });

    describe('#filterByScoreDesc', () => {
        const array = [
            {
                score: 1
            },
            {
                score: 100
            },
            {
                score: 64
            }
        ];
        const expetedArray = [
            {
                score: 100
            },
            {
                score: 64
            },
            {
                score: 1
            }
        ];

        test('should filter array Desc by score when call the function', () => {
            const filteredArray = filterByScoreDesc(array);

            expect(filteredArray).to.be.eql(expetedArray);
        });

    });
});