<template>
    <div class="text-xs-center">
        <v-btn color="#bd4e5b" @click="monthly">Monthly Pass</v-btn>
        <v-btn color="#5bbd4e" @click="flex">Flex Pass</v-btn>
        <v-btn color="#4e68bd" @click="walk">Walk-Up</v-btn>
        <v-btn color="#bd7e4e" @click="staff">Staff Annual</v-btn>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                clicked: ''
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
                var station_list = this.$store.getters.getStarting(this.clicked);
                for (var i = 0; i < station_list.length; ++i) {
                    start_data.push(station_list[i][0]);
                }
                this.$store.commit('setStartArray', start_data);
            },
            endingData() {
                var end_data = [];
                var station_list = this.$store.getters.getEnding(this.clicked);
                for (var i = 0; i < station_list.length; ++i) {
                    end_data.push(station_list[i][0]);
                }
                this.$store.commit('setEndArray', end_data);
            },
            setStarting() {
                this.$http.get('http://localhost:3000/starting').then(response => {
                    this.$store.commit('setStarting', response.body);
                    this.clicked = "Monthly Pass"
                }, response => {
                    console.log(response);
                })
            },
            setEnding() {
                this.$http.get('http://localhost:3000/ending').then(response => {
                    this.$store.commit('setEnding', response.body);
                    this.clicked = "Monthly Pass"
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
            // this.clicked = "Monthly Pass"
            this.setStarting();
            this.setEnding();
        }
    }
</script>
