import Vue from 'vue';
import Vuex from 'vuex';
import Stocks from './modules/stocks.store';
import Portfolio from './modules/portfolio.store';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        Stocks,
        Portfolio,
    },
});
