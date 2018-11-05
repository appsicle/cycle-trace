<template>
    <div class="page-container" scroll="run">
        <v-card class="graph-card">
            <Bar :data="data"></Bar>
            <p style="font-weight: bold">Pass Type</p>
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
                    <h1 style="margin: 0 auto;">Average Distance Per Ride vs. Pass Type</h1>
                </v-card-title>
                <p class="neat-text-body bottom-text">
                    On average, Monthly Pass holders travel a much farther distance than other pass holders!
                    As expected, Staff Annual and Walk-Up bikers tend to travel a much shorter average
                    distance in a single ride. Since Walk-Up users pay $3.50 every half hour, it makes sense that
                    these users would try to limit their rides to short durations and distances to stay within
                    the 30 minute threshold. Having a threshold is a good strategy to encourage Walk-Up users
                    to transition into long term, Monthly Pass or Flex Pass holders, once they feel constrained by the threshold.
                </p>

            </v-card>
        </v-bottom-sheet>
    </div>
</template>

<script>
    import Bar from '../Bar'

    export default {
        props: {
            data: Object
        }
        ,
        components: {
            Bar
        }
    }
</script>
