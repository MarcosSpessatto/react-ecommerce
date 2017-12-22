import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CartPrices from './cart-prices';

describe('Cart Prices Component', () => {
  let wrapper;
  let state;

  describe('When passing correct props to component', () => {

    beforeEach(() => {
      wrapper = shallow(<CartPrices total={12} subtotal={12} freight={12} />);
    });

    describe('#props', () => {

      describe('#subtotal', () => {

        test('should have show subtotal property inside span#subtotal-value', () => {
          expect(wrapper.find('span#subtotal-value').text()).to.be.equal(`R$ ${12}`);
        })
      });

      describe('#freight', () => {

        test('should have show subtotal property inside span#freight-value', () => {
          expect(wrapper.find('span#freight-value').text()).to.be.equal(`R$ ${12}`);
        });
      });

      describe('#total', () => {

        test('should have show subtotal property inside span#total-value', () => {
          expect(wrapper.find('span#total-value').text()).to.be.equal(`R$ ${12}`);
        })
      })
    });

  });

});