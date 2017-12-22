import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import { Cart } from '../cart';

describe('Cart Component', () => {
    let wrapper;
    const props = {
        cart: {
            cart: [
                { id: 1, name: 'test', image: 'tste.png', price: 12, score: 12 },
                { id: 2, name: 'test2', image: 'tste2.png', price: 12, score: 12 }
            ],
            freight: 255,
            total: 20,
            subtotal: 23
        },
        removeGameFromCart: sinon.stub(),
        calculateFreight: sinon.stub(),
        calculateTotalAndSubtotal: sinon.stub()
    };

    beforeEach(() => {
        wrapper = mount(<Cart {...props} />);
    });

    afterEach(() => {
        props.removeGameFromCart.reset();
        props.calculateFreight.reset();
    });

    describe('#functions', () => {
        const itemInfoToRemove = {
            purchaseValue: props.cart.total,
            item: props.cart.cart[0],
            action: 'remove'
        };

        describe('#whenRemoveItem', () => {
            test('should dispatch removeGameFromCart action when item on cart is clicked', () => {
                wrapper.find('CartItem').first().find('div#cart-item').simulate('mouseenter');
                wrapper.find('CartItem').first().find('div#remove-item').simulate('click');

                expect(props.removeGameFromCart.calledWith(props.cart.cart[0])).to.be.true;
            });

            test('should dispatch calculateFreight action when item on cart is clicked', () => {
                wrapper.find('CartItem').first().find('div#cart-item').simulate('mouseenter');
                wrapper.find('CartItem').first().find('div#remove-item').simulate('click');

                expect(props.calculateFreight.calledWith({
                    itemsQuantity: props.cart.cart.length - 1,
                    ...itemInfoToRemove
                })).to.be.true;
            });

            test('should dispatch calculateTotalAndSubtotal action when item on cart is clicked', () => {
                wrapper.find('CartItem').first().find('div#cart-item').simulate('mouseenter');
                wrapper.find('CartItem').first().find('div#remove-item').simulate('click');

                expect(props.calculateTotalAndSubtotal.calledWith({
                    ...itemInfoToRemove
                })).to.be.true;
            });
        });
    });

    describe('#render Items quantity on top of cart', () => {

        test('should render (2 Itens) when more than one item in cart', () => {
            expect(wrapper.find('span#items-quantity').text()).to.be.equal(`(${props.cart.cart.length} Itens)`);
        });

        test('should render (1 Item) when have only one item in cart', () => {
            const copyOfProps = Object.assign({}, props);
            copyOfProps.cart.cart.splice(0, 1);
            const wrapperItem = shallow(<Cart {...copyOfProps} />);
            expect(wrapperItem.find('span#items-quantity').text()).to.be.equal(`(1 Item)`);
        });

    });

    describe('#render', () => {

        describe('#renderItemsOnCart', () => {
            test('should render the same quantity of items has on cart.cart state property', () => {
                expect(wrapper.find('div#cart-item')).to.have.lengthOf(2);
                expect(wrapper.find('div#empty-cart').exists()).to.be.false;
            });
        });


        describe('#itemsQuantity', () => {
            test('should render the quantity of items when has items on cart', () => {
                expect(wrapper.find('span#items-quantity').exists()).to.be.true;
            });

            test('should render the text correct of quantity when have items on cart', () => {
                expect(wrapper.find('span#items-quantity').text()).to.be.equal('(1 Item)');
            });
        });

        describe('#emptyCart', () => {
            test('should render the message of empty cart when has no item on cart', () => {
                const copyOfProps = Object.assign({}, props);
                copyOfProps.cart.cart = [];
                const wrapperEmptyMessage = shallow(<Cart {...copyOfProps} />);
                expect(wrapperEmptyMessage.find('div#cart-item').exists()).to.be.false;
                expect(wrapperEmptyMessage.find('div#empty-cart').exists()).to.be.true;
            });
        });

    });

});