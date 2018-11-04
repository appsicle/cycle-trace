<template>
    <div class="page-container">
        <Pie :data="data"></Pie>
        <v-bottom-sheet>
            <v-btn
                    color="info"
                    style="margin-top: 20px"
                    slot="activator"
                    dark
            >
                Read Analysis
            </v-btn>

            <v-card class="bottom-text-container">
                <v-card-title primary-title>
                    <h1 style="margin: 0 auto;">Quantity of Each Pass Purchased</h1>
                </v-card-title>
                <p class="neat-text-body bottom-text">
                    The majority of bike share users in Los Angeles are Monthly Pass
                    holders! This shows that some features of the bike share may seem more appealing
                    to those that are permanent customers rather than new-comers. In order to <strong>improve user
                    acquisition</strong>,
                    the bike share system could possibly provide extra attention to please first time walk-up customers.

                </p>

            </v-card>
        </v-bottom-sheet>
    </div>

</template>

<script>
    import Pie from '../Pie'

    export default {
        props: {
            data: Object
        },
        components: {
            Pie
        }
    }
</script>