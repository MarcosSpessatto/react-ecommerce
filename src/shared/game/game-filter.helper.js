export const filterByPriceAsc = array => {
    const orderByPriceAsc = (first, second) => first.price > second.price;

    return array.sort(orderByPriceAsc);
};

export const filterByNameAsc = array => {
    const orderByNameAsc = (first, second) => first.name > second.name;

    return array.sort(orderByNameAsc);
};

export const filterByScoreDesc = array => {
    const orderByScoreAsc = (first, second) => first.score < second.score;

    return array.sort(orderByScoreAsc);
};