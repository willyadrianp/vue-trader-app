<template>
    <div class="col col-sm-6 col-md-4">
        <div class="card border-success mt-3">
            <div class="card-header text-white bg-success">
                <div class="d-flex justify-content-between">
                    <strong>{{ stock.name }}</strong>
                    <small>Price: ${{ stock.price }}</small>
                </div>
            </div>
            <div class="card-body">
                <div class="form-inline">
                    <input
                        v-model.number="quantity"
                        type="number"
                        class="form-control mr-3"
                        placeholder="Quantity"
                    />
                    <button
                        class="btn btn-success"
                        :disabled="
                            quantity <= 0 ||
                            !Number.isInteger(quantity) ||
                            insufficientFunds
                        "
                        @click="buyStock"
                    >
                        Buy
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import * as types from '../../store/types';

export default {
    name: 'AppStock',
    props: {
        stock: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            quantity: 0,
        };
    },
    computed: {
        insufficientFunds() {
            return this.quantity * this.stock.price > this.funds;
        },
        ...mapGetters({ funds: types.GET_FUNDS_G1 }),
    },
    methods: {
        ...mapActions({ buyStockAction: types.BUY_STOCK_A2 }),
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity,
            };
            this.buyStockAction(order);
            this.quantity = 0;
        },
    },
};
</script>