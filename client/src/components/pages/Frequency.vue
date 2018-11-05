<template>
    <div class="page-container">
        <v-card class="graph-card">
            <Pie :data="data"></Pie>
        </v-card>
        <v-bottom-sheet>
            <v-btn
                    color="info"
                    style="margin-top: 0px"
                    slot="activator"
            >
                Read Analysis
            </v-btn>

            <v-card class="bottom-text-container">
                <v-card-title primary-title>
                    <h1 style="margin: 0 auto;">Quantity of Each Pass Purchased</h1>
                </v-card-title>
                <p class="neat-text-body bottom-text">
                    The majority of bike share users in Los Angeles are Monthly Pass
                    holders with Walk-Up users at a close second. This shows that the bike share is working extremely
                    well in retaining
                    Monthly Pass holders as well as recruiting new one time Walk-Up users. However, the Flex Pass is
                    much less frequently purchased, perhaps due to an inefficient business model.
                    In order to improve sales, the LA Bike Share could adapt their business model or improve marketing
                    for the Flex-Pass to
                    make it an option
                    just as worthy as the Monthly Pass.
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