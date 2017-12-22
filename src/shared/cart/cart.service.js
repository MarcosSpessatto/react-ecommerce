const dontChargeFreightFrom = 250;
const freightPriceByItem = 10;

export const itemAddedCalculateFreight = ({ itemsQuantity, item, purchaseValue }) => {
    return (purchaseValue + item.price) > dontChargeFreightFrom
        ? 0
        : itemsQuantity * freightPriceByItem;
};

export const itemRemovedFreight = ({ itemsQuantity, item, purchaseValue }) => {
    return (purchaseValue - item.price) > dontChargeFreightFrom
        ? 0
        : itemsQuantity * freightPriceByItem;
};

export const itemAddedPurchaseValue = ({ item, purchaseValue }) => {
    return purchaseValue + item.price;
};

export const itemRemovedPurchaseValue = ({ item, purchaseValue }) => {
    return purchaseValue - item.price;
};