import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import CartItem from '../cart-item';

describe('Cart Item Component', () => {
    let wrapper;
    let state;
    const props = {
        item: {
            id: 1, name: 'test', image: 'tste.png', price: 12, score: 12
        },
        whenRemoveItem: sinon.stub()
    };

    beforeEach(() => {
        wrapper = shallow(<CartItem {...props} />);
    });

    afterEach(() => props.whenRemoveItem.reset());

    describe('#functions', () => {

        describe('#whenMouseEnter()', () => {

            test('should set state.hover to be true when Mouse enter in cart item', () => {
                state = wrapper.state();
                expect(state.hover).to.be.false;
                wrapper.find('div#cart-item').simulate('mouseenter');
                state = wrapper.state();
                expect(state.hover).to.be.true;
            });

            test('should render div #remove-item when mouse enter', () => {
                expect(wrapper.find('div#remove-item').exists()).to.be.false;
                wrapper.find('div#cart-item').simulate('mouseenter');
                expect(wrapper.find('div#remove-item').exists()).to.be.true;
            });

        });

        describe('#whenMouseLeave', () => {

            test('should set state.hover to be false when Mouse leave out cart item', () => {
                wrapper.find('div#cart-item').simulate('mouseenter');
                expect(state.hover).to.be.true;
                wrapper.find('div#cart-item').simulate('mouseleave');
                state = wrapper.state();
                expect(state.hover).to.be.false;
            });

            test('should not render div #remove-item when mouse leave', () => {
                wrapper.find('div#cart-item').simulate('mouseenter');
                expect(wrapper.find('div#remove-item').exists()).to.be.true;
                wrapper.find('div#cart-item').simulate('mouseleave');
                expect(wrapper.find('div#remove-item').exists()).to.be.false;
            });

        });

        describe('#whenRemoveItem', () => {
            test(`should execute whenRemoveItem function when an item it's clicked`, () => {
                wrapper.find('div#cart-item').simulate('mouseenter');
                wrapper.find('div#remove-item').simulate('click');
                expect(props.whenRemoveItem.calledWith(props.item)).to.be.true;
            });
        });

    });
});
