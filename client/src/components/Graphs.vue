<template>
    <v-app>
        <div class="graphs-container">
            <transition
                    enter-active-class="animated fast fadeIn"
                    leave-active-class="animated fast fadeOut"
                    mode="out-in">
                <keep-alive>
                    <router-view
                            :data="{'frequency': frequency, 'averageDistances': averageDistances, 'seasonalData': seasonalData, 'bubbles': routes}"></router-view>
                </keep-alive>
            </transition>

        </div>
    </v-app>
</template>

<script>
    import PassStats from './Bar'
    import Pie from './Pie'
    import Donut from './pages/Stations'

    Chart.defaults.global.defaultFontSize = 13.5;
    Chart.defaults.global.defaultFontColor = 'black';

    export default {
        data() {
            return {
                text: {
                    distance: 'On average, Monthly Pass holders travel a much\n' +
                        '                    farther distance than other pass holders! If you\'re commuting from far away, you might want to\n' +
                        '                    invest in a monthly pass.',
                    frequency: 'The majority of bike share users in Los Angeles are Monthly Pass\n' +
                        '                    holders! If you\'re gonna use the bike share, you might as well become a regular user.',
                    stations: ''
                }
            }
        },
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
            },
            seasonalData() {
                var seasons = this.$store.getters.getSeasons;
                var frequency_data = [];
                var duration_data = [];
                for (var key in seasons) {
                    frequency_data.push(seasons[key].frequency);
                    duration_data.push(seasons[key].average_time);
                }
                return [frequency_data, duration_data];
            },
            routes() {
                var routes = this.$store.getters.getRoutes;
                const bubbles = [
                    {
                        x: 0,
                        y: 0,
                        r: 0
                    }
                ];
                for (var key in routes) {
                    var bubble = {
                        x: routes[key][0].slice(0, 4),
                        y: routes[key][0].slice(6),
                        r: routes[key][1] / 10
                    };
                    bubbles.push(bubble);
                }
                return bubbles;
            }
        },
        methods: {
            setDefault() {
                this.$http.get('http://ec2-107-23-31-8.compute-1.amazonaws.com:3000/').then(response => {
                    this.$store.commit('setStats', response.body);
                }, response => {
                    console.log(response);
                })
            },
            setSeasons() {
                this.$http.get('http://localhost:3000/seasons').then(response => {
                    this.$store.commit('setSeasons', response.body);
                }, response => {
                    console.log(response);
                })
            },
            setRoutes() {
                this.$http.get('http://localhost:3000/routes').then(response => {
                    this.$store.commit('setRoutes', response.body);
                }, response => {
                    console.log(response);
                })
            }

        },
        beforeMount() {
            this.setDefault();
            this.setSeasons();
            this.setRoutes();
        }

    }
</script>

<style>
    .graphs-container {
        margin-top: 64px;
        margin-left: 10%;
        margin-right: 10%;
    }

    .bottom-text-container {
        height: 400px;
    }

    .bottom-text {
        padding-top: 30px;
        font-size: 3vh;
    }

    .page-container {
        text-align: center;
    }

</style>