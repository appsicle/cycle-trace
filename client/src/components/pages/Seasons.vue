<template>
    <div class="page-container" style="margin-bottom: 30px">
        <div>
            <v-card class="graph-card">
                <LD :data="data"></LD>
                <p style="font-weight: bold">Date (2016 - 2017)</p>
            </v-card>
            <v-divider></v-divider>
            <v-card class="graph-card">
                <LF :data="data"></LF>
                <p style="font-weight: bold">Date (2016 - 2017)</p>
            </v-card>
        </div>
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
                    <h1 style="margin: 0 auto;">Ride Data Over Time</h1>
                </v-card-title>
                <p class="neat-text-body bottom-text">
                    Upon analyzing the graph of average ride duration over time, one can see that there are not many
                    obvious patterns.
                    We are however able to see that <strong>the shortest rides tend to occur over the summer</strong>,
                    more specifically in the month
                    of July. This could be due to the hot weather discouraging people from biking outdoors.
                    As for the quantity of riders over time, there is a drastic <strong>decrease in ridership during the
                    Winter</strong>. Ridership
                    begins to increase throughout the Spring and Summer seasons. Additionally, there is a massive spike
                    in ridership for
                    October 16 which was the day of an event known as CicLAvia - a celebration
                    of active transportation and car-free streets, encouraging people to bike. The LA Bike Share could
                    improve their platform
                    usage by having events and promotions for their system similar to CicLAvia. Perhaps by having a day
                    where all rides are free for 30 minutes,
                    users that are unfamiliar with the platform could be acquired.

                </p>

            </v-card>
        </v-bottom-sheet>
    </div>
</template>

<script>
    import LD from '../LineDuration'
    import LF from '../LineFrequency'

    export default {
        components: {
            LD, LF
        },
        props: {
            data: Object
        }
    }
</script>