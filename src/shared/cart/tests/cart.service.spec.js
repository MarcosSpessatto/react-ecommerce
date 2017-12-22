import { expect } from 'chai';
import {
    itemAddedCalculateFreight,
    itemRemovedFreight,
    itemAddedPurchaseValue,
    itemRemovedPurchaseValue
} from '../cart.service';

describe('Cart Service', () => {

    describe('#itemAddedFreight', () => {
        test('should add 10 brl to the actual value when purchase value is less than 250 brl', () => {
            expect(itemAddedCalculateFreight({
                itemsQuantity: 4,
                item: { price: 20 },
                purchaseValue: 20
            })).to.be.equal(40);
        });

        test('should return 0 when purchase value is greater than 250 brl', () => {
            expect(itemAddedCalculateFreight({
                itemsQuantity: 4,
                item: { price: 10 },
                purchaseValue: 241
            })).to.be.equal(0);
        });
    });

    describe('#itemRemovedFreight', () => {

        test('should subtract 10 brl to the actual value and return freight value when purchase value is less than 250 brl', () => {
            expect(itemRemovedFreight({ itemsQuantity: 4, item: { price: 20 }, purchaseValue: 250 })).to.be.equal(40);
        });

        test('should return 0 when purchase value is greater than 250 brl', () => {
            expect(itemRemovedFreight({ itemsQuantity: 4, item: { price: 20 }, purchaseValue: 280 })).to.be.equal(0);
        });
    });

    describe('#itemAddedPurchaseValue', () => {
        test('should add item price to the purchase value', () => {
            expect(itemAddedPurchaseValue({ item: { price: 125 }, purchaseValue: 20 })).to.be.equal(145);
        });
    });

    describe('#itemRemovedPurchaseValue', () => {
        test('should add item price to the purchase value', () => {
            expect(itemRemovedPurchaseValue({ item: { price: 20 }, purchaseValue: 120 })).to.be.equal(100);
        });
    });

});