<template>
    <div class="page-container">
        <v-card class="graph-card">
            <Bubble :data="data"></Bubble>
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
                    <h1 style="margin: 0 auto;">Popularity of Route Combinations</h1>
                </v-card-title>
                <p class="neat-text-body bottom-text">
                    This graph shows the frequency of start-stop station combinations. The pixel radius of each bubble
                    represents 10% of the
                    actual number of trips for that station combination. The two most popular start-stop combinations
                    were <strong>Stations 3030 to 3014</strong> with over 930 rides and the reverse trip, <strong>Stations 3014 to 3030</strong>
                    with over 670 rides.
                    Upon further analysis, Station 3030 was located at 120 S Main St. and Station 3014 was located at
                    834 N Alameda St.
                    According to the official bike share metro website,
                    LA bike share offers a <strong>"Bike Share for Business"</strong> plan that encourages businesses to recruit their
                    employees for
                    a cheaper price. In order to <strong>improve user acquisition</strong>, LA bike share should <strong>specifically target
                    businesses located near
                    120 S Main St. and 834 N Alameda St. with advertisements </strong> for their "Bike Share for Business" plan in order to
                    <strong>maximize their corporate
                    outreach.</strong>
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

