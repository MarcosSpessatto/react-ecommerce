import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { Home } from './home';
import constants from '../../constants/constants.json';

describe('Home Component', () => {
    let wrapper;

    const props = {
        game: {
            games: [
                { id: 1, name: 'test', image: 'tste.png', price: 12, score: 12 },
                { id: 2, name: 'test2', image: 'tste2.png', price: 12, score: 12 }]
        },
        cart: {
            cart: [
                { id: 1, name: 'test', image: 'tste.png', price: 12, score: 12, positionInCart: 0 },
                { id: 2, name: 'test2', image: 'tste2.png', price: 12, score: 12, positionInCart: 1 }
            ],
            freight: 255,
            total: 20,
            subtotal: 23
        },
        filterGames: sinon.stub(),
        addGameToCart: sinon.stub(),
        calculateFreight: sinon.stub(),
        calculateTotalAndSubtotal: sinon.stub()
    };


    describe('#PageTitle', () => {

        beforeEach(() => {
            wrapper = shallow(<Home {...props} />);
        });

        afterEach(() => {
            props.filterGames.reset();
            props.addGameToCart.reset();
            props.calculateFreight.reset();
        });

        test('should have to show PageTitle', () => {
            expect(wrapper.find('PageTitle').html()).to.be.equal(`<h1 id="page-title">${constants.games}</h1>`);
        })
    });

    describe('#Select', () => {

        test('should have dispatch redux action when select is changed', () => {
            wrapper.find('Select').dive().find('select').simulate('change', { target: { value: 'price' } });
            expect(props.filterGames.calledWith({ value: 'price' }, props.game.games)).to.be.true;
        });
    });

    describe('#GameCard', () => {
        const objectToSaveInCart = { ...props.game.games[0], positionInCart: props.cart.cart.length };
        const itemInfoToAddItemInCart = {
            purchaseValue: props.cart.total,
            item: objectToSaveInCart,
            action: 'add'
        };

        test('should have render cards when have some card', () => {
            expect(wrapper.find('GameCard')).to.have.lengthOf(2);
        });

        test('should have dispatch addGameToCart action when gameCard is clicked', () => {
            wrapper.find('GameCard').first().dive().find('div#game-card').simulate('click');
            expect(props.addGameToCart.calledWith(objectToSaveInCart)).to.be.true;
        });

        test('should have dispatch calculateFreight action when gameCard is clicked', () => {
            wrapper.find('GameCard').first().dive().find('div#game-card').simulate('click');
            expect(props.calculateFreight.calledWith({
                itemsQuantity: props.cart.cart.length + 1,
                ...itemInfoToAddItemInCart
            })).to.be.true;
        });

        test('should have dispatch calculateTotalAndSubtotal action when gameCard is clicked', () => {
            wrapper.find('GameCard').first().dive().find('div#game-card').simulate('click');
            expect(props.calculateTotalAndSubtotal.calledWith({
                ...itemInfoToAddItemInCart
            })).to.be.true;
        });

    });

});