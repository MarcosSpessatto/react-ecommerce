import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CartDescription from '../cart-description';

describe('Cart Description Component', () => {
  let wrapper;
  let state;

  describe('When passing correct props to component', () => {

    beforeEach(() => {
      wrapper = shallow(<CartDescription name='test' price={12} />);
    });

    describe('#props', () => {

      describe('#name', () => {

        test('should have show subtotal property inside span#item-name', () => {
          expect(wrapper.find('span#item-name').text()).to.be.equal('test');
        })
      });

      describe('#price', () => {

        test('should have show subtotal property inside span#item-price', () => {
          expect(wrapper.find('span#item-price').text()).to.be.equal(`R$ ${12}`);
        });
      });

    });

  });

});