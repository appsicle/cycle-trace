<template>
    <div class="page-container" style="margin-bottom: 30px">
        <div>
            <LD :data="data" style=""></LD>
            <LF :data="data" style=""></LF>
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
                    <h1 style="margin: 0 auto;">Ride Data Over Time</h1>
                </v-card-title>
                <p class="neat-text-body bottom-text">
                    Upon analyzing the graph of average ride duration over time, one can see that there are not many obvious patterns.
                    We are however able to see that the shortest rides tend to occur over the summer, more specifically in the month
                    of July. As for the quantity of riders over time, there is a drastic decrease in ridership during the Winter. Ridership
                    begins to increase throughout the Spring and Summer seasons. Additionally, there is a massive spike in ridership for
                    October 16 which was the day of an event known as CicLAvia - a celebration
                    of active transportation and car-free streets, encouraging people to bike.

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