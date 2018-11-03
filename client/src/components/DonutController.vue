<template>
    <div style="padding-top: 20px;">
        <h2 class="text-xs-center">Select a Pass Type to Group By</h2>
        <div class="text-xs-center">
            <v-btn style="border: 1px solid gray;"
                   class="text-capitalize"
                   :flat="clicked!='Monthly Pass'"
                   :color="clicked==='Monthly Pass'?'success' : 'undefined'"
                   @click="monthly">Monthly Pass
            </v-btn>
            <v-btn style="border: 1px solid gray;"
                   class="text-capitalize"
                   :flat="clicked!='Flex Pass'"
                   :color="clicked==='Flex Pass'?'success' : 'undefined'"
                   @click="flex">Flex Pass
            </v-btn>
            <v-btn style="border: 1px solid gray;"
                   class="text-capitalize"
                   :flat="clicked!='Walk-up'"
                   :color="clicked==='Walk-up'?'success' : 'undefined'"
                   @click="walk">Walk-Up
            </v-btn>
            <v-btn style="border: 1px solid gray;"
                   class="text-capitalize"
                   :flat="clicked!='Staff Annual'"
                   :color="clicked==='Staff Annual'?'success' : 'undefined'"
                   @click="staff">Staff Annual
            </v-btn>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                clicked: 'Monthly Pass'
            }
        },
        methods: {
            monthly() {
                this.clicked = "Monthly Pass"
            },
            flex() {
                this.clicked = "Flex Pass"
            },
            walk() {
                this.clicked = "Walk-up"
            },
            staff() {
                this.clicked = "Staff Annual"
            },
            startingData() {
                var start_data = []; //THIS ARRAY should STORE THE FREQUENCIES , fix
                var start_labels = [];
                var station_list = this.$store.getters.getStarting(this.clicked);

                for (var i = 0; i < station_list.length; ++i) {
                    start_data.push(station_list[i][1]);
                    start_labels.push(station_list[i][0]);
                }
                this.$store.commit('setStartArray', start_data);
                this.$store.commit('setStartLabels', start_labels)
            },
            endingData() {
                var end_data = [];
                var end_labels = [];
                var station_list = this.$store.getters.getEnding(this.clicked);
                for (var i = 0; i < station_list.length; ++i) {
                    end_data.push(station_list[i][1]);
                    end_labels.push(station_list[i][0]);
                }
                this.$store.commit('setEndArray', end_data);
                this.$store.commit('setEndLabels', end_labels);
            },
            setStarting() {
                this.$http.get('http://localhost:3000/starting').then(response => {
                    this.$store.commit('setStarting', response.body);
                }, response => {
                    console.log(response);
                })
            },
            setEnding() {
                this.$http.get('http://localhost:3000/ending').then(response => {
                    this.$store.commit('setEnding', response.body);
                }, response => {
                    console.log(response);
                })
            }

        },
        watch: {
            clicked() {
                this.startingData();
                this.endingData();
            }
        },
        created() {
            console.log('created')
            this.setStarting();
            this.setEnding();
        }
    }
</script>

<style scoped>
    h2 {
        font-family: 'Roboto', sans-serif;
    }
</style>
