import * as types from '../types';

const state = {
    funds: 10000,
    stocks: [],
};

const mutations = {
    [types.BUY_STOCK_M1](state, order) {
        const record = state.stocks.find(
            (element) => element.id === order.stockId,
        );
        if (record) {
            record.quantity += order.quantity;
        } else {
            state.stocks.push({
                id: order.stockId,
                quantity: order.quantity,
            });
        }
        state.funds -= order.stockPrice * order.quantity;
    },
    [types.SELL_STOCK_M1](state, order) {
        const record = state.stocks.find(
            (element) => element.id === order.stockId,
        );
        if (record.quantity > order.quantity) {
            record.quantity -= order.quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record, 1));
        }
        state.funds += order.stockPrice * order.quantity;
    },
};

const actions = {
    [types.SELL_STOCK_A1]({ commit }, order) {
        commit(types.SELL_STOCK_M1, order);
    },
};

const getters = {
    [types.GET_STOCKS_G1](state, getters) {
        return state.stocks.map((stock) => {
            const record = getters[types.GET_STOCKS_G2].find(
                (element) => element.id === stock.id,
            );
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price,
            };
        });
    },
    [types.GET_FUNDS_G1](state) {
        return state.funds;
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
};
