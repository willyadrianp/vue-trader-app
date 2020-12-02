<template>
    <div class="col">
        <div class="card border-success mt-3">
            <div class="card-header text-white bg-success">
                <div class="d-flex justify-content-between">
                    <strong>{{ stock.name }}</strong>
                    <small
                        >Price: ${{ stock.price }} | Quantity:
                        {{ stock.quantity }}</small
                    >
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
                            insufficientQuantity
                        "
                        @click="sellStock"
                    >
                        Sell
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
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
        insufficientQuantity() {
            return this.quantity > this.stock.quantity;
        },
    },
    methods: {
        ...mapActions({ sellStockAction: types.SELL_STOCK_A1 }),
        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity,
            };
            this.sellStockAction(order);
            this.quantity = 0;
        },
    },
};
</script>

<style>
</style>