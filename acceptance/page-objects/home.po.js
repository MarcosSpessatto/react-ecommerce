export const getListOfGamesName = async () => {
    return await element.all(by.css('.game-card-item p#game-name')).map(async (item) => await item.getText());
};

export const getFirstGameInList = async () => {
    return await element.all(by.css('.game-card-item')).first();
};

export const getNameOfFirstGame = async () => {
    return await element.all(by.css('.game-card-item p#game-name')).first().getText();
};

export const getAddToCartTextForFirstCard = async () => {
    return await element.all(by.css('.game-card-item p#add-to-cart')).first().getText();
};

export const changeSelectOfGamesOrder = (indexOfOption) => {
    const selectOption = element(by.id('selectGame')).all(by.tagName('option'));
    selectOption.get(indexOfOption).click();
};

export const getQuantityOfItemsInTheCart = async () => {
    return await element.all(by.css('.cart-item')).count();
};

export const getFirstItemOnCart = async () => {
    return await element.all(by.css('.cart-item')).first();
};

export const removeFirstItemOnCart = async () => {
    return await element.all(by.css('.remove-item')).first().click();
};