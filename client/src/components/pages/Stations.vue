<template>
    <div class="page-container">
        <v-card class="graph-card">
            <DC/>
            <div class="donut-container">

                <DonutGraphS style="width: 47%;"></DonutGraphS>
                <DonutGraphE style="width: 47%"></DonutGraphE>
            </div>

        </v-card>

        <v-bottom-sheet>
            <v-btn
                    color="info"
                    style="margin-top: 20px"
                    slot="activator"
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
                    their most popular start and end stations in common! This data suggests that commuters / regular users
                    tend to travel through the same stations and one time users tend to travel through the same stations.
                    In order to <strong>improve user acquisition</strong>, LA Bike Share should target areas
                    surrounding the popular start and end stations for commuters with advertisements for the Monthly Pass and Flex Pass
                    and areas surrounding the popular start and end stations for Walk-Up users with advertisements targeted at them.
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