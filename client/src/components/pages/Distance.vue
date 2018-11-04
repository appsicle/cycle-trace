<template>
    <div class="page-container">
        <v-btn @click="openDialog">click</v-btn>
        <Bar :data="data"></Bar>
        <v-bottom-sheet v-model="value">
            <v-btn
                    color="info"
                    style="margin-top: 20px"
                    slot="activator"
                    dark
            >
                Read Analysis
            </v-btn>

            <v-card class="bottom-text-container" >
                <v-card-title primary-title>
                    <h1 style="margin: 0 auto;">Average Distance Per Ride vs. Pass Type</h1>
                </v-card-title>
                <p class="neat-text-body bottom-text">
                    On average, Monthly Pass holders travel a much
                    farther distance than other pass holders! If you're commuting from far away, you might want to
                    invest in a monthly pass. As expected, Staff Annual and Walk-Up bikers tend to travel a much shorter average
                    distance in a single ride.
                </p>

            </v-card>
        </v-bottom-sheet>

    </div>
</template>

<script>
    import Bar from '../Bar'

    export default {
        data(){
            return {
                value: undefined
            }
        },
        methods: {
          openDialog(){
              this.value = true;
          }
        },
        props: {
            data: Object
        },
        components: {
            Bar
        }
    }
</script>
