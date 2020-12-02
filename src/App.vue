<template>
    <div id="app">
        <app-header />
        <router-view />
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import AppHeader from './components/static/TheHeader.vue';
import * as types from './store/types';

export default {
    components: {
        AppHeader,
    },
    created() {
        this.initStocks();
    },
    methods: {
        ...mapActions({
            initStocks: types.INIT_STOCKS_A2,
        }),
    },
};
</script>

<style>
body {
    padding: 30px;
}
</style>
