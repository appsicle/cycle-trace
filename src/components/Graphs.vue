<template>
    <v-app>
        <div class="graphs-container">
            <v-card style="margin: 20px; padding: 0;">
                <PassStats :data="averageDistances"/>
                <v-card-text class="text-xs-center">On average, Monthly Pass holders travel a much farther distance than other pass holders! If you're commuting from far away, you might want to invest in a monthly pass.</v-card-text>
            </v-card>
            <v-card style="margin: 20px; padding: 0;">
                <Pie :data="frequency"></Pie>
                <v-card-text class="text-xs-center">The majority of bike share users in Los Angeles are Monthly Pass holders! If you're gonna use the bike share, you might as well become a regular user.</v-card-text>
            </v-card>
            <v-card style="margin: 20px; padding: 0;">
                <Donut></Donut>
                <v-card-text class="text-xs-center">Monthly Pass holders and Flex Pass holders have most popular start and end stations in common whereas Walk-up holders and Staff Annual bikers have most popular start and end stations in common! Depending on the route you take, you might want to invest in a different pass.</v-card-text>
            </v-card>
        </div>
    </v-app>
</template>

<script>
    import PassStats from './PassStats'
    import Pie from './Pie'
    import Donut from './Donut'

    export default {
        components: {
            PassStats,
            Pie,
            Donut
        },
        computed: {
            passTypes() {
                return this.$store.getters.getPassTypes;
            },
            averageDistances() {
                var types = this.passTypes;
                var tempArray = [];
                for (var key in types) {
                    tempArray.push(this.$store.getters.getAttributes(types[key], 'average_distance'));
                }
                return tempArray;
            },
            frequency() {
                var types = this.passTypes;
                var tempArray = [];
                for (var key in types) {
                    tempArray.push(this.$store.getters.getAttributes(types[key], 'frequency'));
                }
                return tempArray;
            }
        },
        methods: {
            setDefault() {
                this.$http.get('http://localhost:3000').then(response => {
                    this.$store.commit('setStats', response.body);
                }, response => {
                    console.log(response);
                })
            }

        },
        beforeMount() {
            this.setDefault();
        }

    }
</script>

<style scoped>
    .graphs-container div {
        padding-bottom: 70px;
    }
</style>