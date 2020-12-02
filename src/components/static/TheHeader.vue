<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link
            class="navbar-brand"
            :to="{ name: 'Home' }"
            active-class="active"
            >Stock Trader</router-link
        >

        <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav nav-pills mr-auto">
                <li class="nav-item">
                    <router-link
                        class="nav-link"
                        :to="{ name: 'Portfolio' }"
                        active-class="active"
                        >Portfolio</router-link
                    >
                </li>
                <li class="nav-item">
                    <router-link
                        class="nav-link"
                        :to="{ name: 'Stocks' }"
                        active-class="active"
                        >Stocks</router-link
                    >
                </li>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" @click="endDay">End Day</a>
                </li>
                <li class="nav-item dropdown">
                    <a
                        id="navbarDropdown"
                        class="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        Save & Load
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Save Data</a>
                        <a class="dropdown-item" href="#">Load Data</a>
                    </div>
                </li>
                <li>
                    <strong>
                        <p class="nav-item nav-link">Funds: ${{ funds }}</p>
                    </strong>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import * as types from '../../store/types';

export default {
    name: 'AppHeader',
    computed: {
        ...mapGetters({
            funds: types.GET_FUNDS_G1,
        }),
    },
    methods: {
        ...mapActions({
            endDay: types.RND_STOCKS_A2,
        }),
    },
};
</script>