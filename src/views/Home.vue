<template>
    <div>
        <h1>Welcome to Trader App</h1>
        <p>Your Funds: {{ funds }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import * as types from '../store/types';

export default {
    computed: {
        ...mapGetters({
            funds: types.GET_FUNDS_G1,
        }),
    },
};
</script>
