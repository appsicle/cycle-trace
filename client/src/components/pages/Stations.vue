<template>
    <div class="page-container">
        <DC/>
        <div class="donut-container">
            <DonutGraphS style="width: 47%;"></DonutGraphS>
            <DonutGraphE style="width: 47%"></DonutGraphE>
        </div>

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
                    <h1 style="margin: 0 auto;">Most Popular Stations (Starting and Ending) Per Pass</h1>
                </v-card-title>
                <p class="neat-text-body bottom-text">
                    <strong>Monthly Pass holders and Flex Pass holders</strong> have their most popular start
                    and end stations in common whereas <strong>Walk-up holders and Staff Annual</strong> bikers have
                    their most popular start
                    and end stations in common! Depending on the route you take, you might want to invest in a different
                    pass. In order for the LA bike share to <strong>improve user acquisition and retention</strong>, it
                    should target
                    stations 3030 and 3005 with advertisements prepared to retain returning customers and station 3069
                    with advertisements prepared to acquire new customers.
                </p>

            </v-card>
        </v-bottom-sheet>

    </div>
</template>

<script>
    import DC from '../DonutController'
    import DonutGraphS from '../DonutGraphStarting'
    import DonutGraphE from '../DonutGraphEnding'

    export default {
        components: {
            DC,
            DonutGraphS,
            DonutGraphE
        }
    }
</script>

<style>
    .donut-container {
        display: flex;
        justify-content: space-evenly;
    }
</style>