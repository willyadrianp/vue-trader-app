<template>
    <div class="row">
        <div class="card-group">
            <app-stock
                v-for="stock in myStocks"
                :key="stock.id"
                :stock="stock"
            />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import * as types from '../../store/types';
import AppStock from './Stock.vue';

export default {
    components: {
        AppStock,
    },
    computed: {
        ...mapGetters({
            myStocks: types.GET_STOCKS_G1,
        }),
    },
};
</script>

<style></style>
