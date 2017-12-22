import { expect } from 'chai';
import { cloneArray } from '../utils.helper';

describe('Utils Helper', () => {

    describe('#cloneArray', () => {
        test('should return an array equal to passed', () => {
            expect(cloneArray([1, 2, 3])).to.be.eql([1, 2, 3]);
        })
    })
});