import stocks from '../../data/stocks';
import * as types from '../types';

const state = {
    stocks: [],
};

const mutations = {
    [types.SET_STOCKS_M2](state) {
        state.stocks = stocks;
    },
    [types.RND_STOCKS_M2](state) {
        state.stocks.forEach((stock) => {
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
        });
    },
};

const actions = {
    [types.INIT_STOCKS_A2]({ commit }) {
        commit(types.SET_STOCKS_M2);
    },
    [types.BUY_STOCK_A2]({ commit }, order) {
        commit(types.BUY_STOCK_M1, order);
    },
    [types.RND_STOCKS_A2]({ commit }) {
        commit(types.RND_STOCKS_M2);
    },
};

const getters = {
    [types.GET_STOCKS_G2](state) {
        return state.stocks;
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
};
