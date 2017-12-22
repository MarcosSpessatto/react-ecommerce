import { expect } from 'chai';
import {
    getNamesInPriceOrder,
    getNamesInScoreOrder,
    getNamesInNameOrder
} from './filter.helper';
import {
    getListOfGamesName,
    changeSelectOfGamesOrder,
    getFirstGameInList,
    getNameOfFirstGame,
    getAddToCartTextForFirstCard,
    getQuantityOfItemsInTheCart,
    getFirstItemOnCart,
    removeFirstItemOnCart
} from "./page-objects/home.po";

describe('Home Page', () => {

    beforeAll(() => {
        browser.get('/');
    });

    describe('#Page name', () => {
        it('should have correct page title', async () => {
            const gameId = element(by.id('page-title'));
            const text = await gameId.getText();
            expect(text).to.be.equal('Games');
        });
    });

    describe('#List games', () => {
        it('should have list the list of games order by price for the startup', async () => {
            const gamesNames = await getListOfGamesName();
            expect(gamesNames).to.be.eql(getNamesInPriceOrder());
        });

        it('should have the list of games order by score desc when change to order by score', async () => {
            const indexOfScoreOption = 1;
            changeSelectOfGamesOrder(indexOfScoreOption);
            const gamesNames = await getListOfGamesName();
            expect(gamesNames).to.be.eql(getNamesInScoreOrder());
        });

        it('should have the list of games order by name when change to order by name asc', async () => {
            const indexOfNameOption = 2;
            changeSelectOfGamesOrder(indexOfNameOption);
            const gamesNames = await getListOfGamesName();
            expect(gamesNames).to.be.eql(getNamesInNameOrder());
        });
    });

    describe('#GameCard', () => {

        it('should have the text "adicionar ao carrinho" when mouseover and return to game name at the mouse leave', async () => {
            changeSelectOfGamesOrder(0);
            const firstGame = await getFirstGameInList();
            const firstGameName = await getNameOfFirstGame();
            expect(firstGameName).to.be.equal('Call Of Duty Infinite Warfare');
            browser.actions().mouseMove(firstGame).perform();
            const addToCartText = await getAddToCartTextForFirstCard();
            expect(addToCartText).to.be.equal('adicionar ao carrinho');
        });
    });

    describe('#addToCart', () => {

        it('should have add the first game in the card correctly when click game', async () => {
            changeSelectOfGamesOrder(0);
            const firstGame = await getFirstGameInList();
            await firstGame.click();
            const quantityOfItemsInTheCart = await getQuantityOfItemsInTheCart();
            expect(quantityOfItemsInTheCart).to.be.equal(1);
        });

        it('should remove the item added in the cart and should have zero items', async () => {
            changeSelectOfGamesOrder(0);
            const firstGameOnCart = await getFirstItemOnCart();
            browser.actions().mouseMove(firstGameOnCart).perform();
            await removeFirstItemOnCart();
            const quantityOfItemsInTheCart = await getQuantityOfItemsInTheCart();
            expect(quantityOfItemsInTheCart).to.be.equal(0);
        });

    });

});