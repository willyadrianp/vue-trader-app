<template>
    <div class="row">
        <div class="card-group">
            <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppStock from './Stock.vue';
import * as types from '../../store/types';

export default {
    components: {
        AppStock,
    },
    computed: {
        ...mapGetters({ stocks: types.GET_STOCKS_G2 }),
    },
};
</script>
