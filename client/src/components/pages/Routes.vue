<template>
    <div class="page-container">
        <Bubble :data="data"></Bubble>
        <v-bottom-sheet>
            <v-btn
                    color="info"
                    style="margin-top: 20px;"
                    slot="activator"
                    dark
            >
                Read Analysis
            </v-btn>

            <v-card class="bottom-text-container">
                <v-card-title primary-title>
                    <h1 style="margin: 0 auto;">Popularity of Route Combinations</h1>
                </v-card-title>
                <p class="neat-text-body bottom-text">
                    This graph shows the frequency of start-stop station combinations. The pixel radius of each bubble represents 10% of the
                    actual number of trips for that station combination. The two most popular start-stop combinations were Station 3030 to Station 3014
                    and the reverse trip, Station 3014 to 3030. Upon further analysis, Station 3030 was located at 120 S Main St. and Station 3014 was
                    located at 834 N Alameda St.
                </p>

            </v-card>
        </v-bottom-sheet>
    </div>
</template>

<script>
    import Bubble from '../Bubble'

    export default {
        props: {
            data: Object
        },
        components: {
            Bubble
        }
    }
</script>

