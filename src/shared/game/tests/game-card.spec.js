import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { GameCard } from '../game-card';
import sinon from 'sinon';

describe('Game Card Component', () => {
    let wrapper;
    let state;
    const game = {
        "id": 312,
        "name": "Super Mario Odyssey",
        "price": 197.88,
        "score": 100,
        "image": "super-mario-odyssey.png"
    };

    describe('When passing correct props to component', () => {
        const whenAddGameToCartStub = sinon.stub();

        beforeEach(() => {
            wrapper = shallow(<GameCard game={game} whenAddGameToCart={whenAddGameToCartStub} />);
        });

        describe('#Props', () => {

            describe('name', () => {

                test('should render game name inside "p" tag', () => {
                    expect(wrapper.find('p#game-name').text()).to.be.equal(game.name);
                });

            });

            describe('price', () => {

                test('should render game price inside "span" tag', () => {
                    expect(wrapper.find('span#game-price').text()).to.be.equal(`R$ ${game.price}`);
                });

                test('should render game price with "game-card-price" class', () => {
                    expect(wrapper.find('span#game-price').hasClass('game-card-price')).to.be.true;
                });

            });
        });

        describe('#functions', () => {

            describe('#whenMouseEnter()', () => {

                test('should set state.hover to be true when Mouse enter in card body', () => {
                    state = wrapper.state();
                    expect(state.hover).to.be.false;
                    wrapper.find('div#game-card').simulate('mouseenter');
                    state = wrapper.state();
                    expect(state.hover).to.be.true;
                });

                test('should render div with p inside with text "Adicionar ao carrinho" and with class game-card-price', () => {
                    expect(wrapper.find('p#game-name').exists()).to.be.true;
                    wrapper.find('div#game-card').simulate('mouseenter');
                    expect(wrapper.find('p#add-to-cart').exists()).to.be.true;
                    expect(wrapper.find('p#game-name').exists()).to.be.false;
                });

                test('should render "Adicionar ao carrinho" with class game-card-price', () => {
                    wrapper.find('div#game-card').simulate('mouseenter');
                    expect(wrapper.find('p#add-to-cart').hasClass('game-card-price')).to.be.true;
                });

            });

            describe('#whenMouseLeave', () => {

                test('should set state.hover to be false when Mouse leave out card body', () => {
                    wrapper.find('div#game-card').simulate('mouseenter');
                    expect(state.hover).to.be.true;
                    wrapper.find('div#game-card').simulate('mouseleave');
                    state = wrapper.state();
                    expect(state.hover).to.be.false;
                });

                test('should render p and span with name and price when mouse leave', () => {
                    wrapper.find('div#game-card').simulate('mouseenter');
                    expect(wrapper.find('p#game-name').exists()).to.be.false;
                    wrapper.find('div#game-card').simulate('mouseleave');
                    expect(wrapper.find('p#add-to-cart').exists()).to.be.false;
                    expect(wrapper.find('p#game-name').exists()).to.be.true;
                });

            });

            describe('#addGameToCart', () => {

                test(`should dispatch "addGameToCart" action creator when div of game is clicked for add to cart `, () => {
                    wrapper.find('div#game-card').simulate('click');
                    expect(whenAddGameToCartStub.calledWith(game)).to.be.true;
                });

            });

        });

    });

});