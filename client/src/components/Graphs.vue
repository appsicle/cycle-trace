<template>
    <v-app>
        <div class="graphs-container">
            <transition
            enter-active-class="animated fast fadeIn"
            leave-active-class="animated faster fadeOut"
            mode="out-in">
                <keep-alive>
            <router-view :data="{'frequency': frequency, 'averageDistances': averageDistances}"></router-view>
                </keep-alive>
            </transition>
            <!--<v-card style="margin: 20px; padding: 0; background-color: #e7e5df;">-->
                <!--<PassStats :data="averageDistances"/>-->
                <!--<v-card-text class="text-xs-center">On average, Monthly Pass holders travel a much-->
                    <!--farther distance than other pass holders! If you're commuting from far away, you might want to-->
                    <!--invest in a monthly pass.-->
                <!--</v-card-text>-->
            <!--</v-card>-->

            <!--<v-card style="margin: 20px; padding: 0; background-color: #e7e5df;">-->
                <!--<Pie :data="frequency"></Pie>-->
                <!--<v-card-text class="text-xs-center">The majority of bike share users in Los Angeles are <strong>Monthly Pass-->
                    <!--holders!</strong> If you're gonna use the bike share, you might as well become a regular user.-->
                <!--</v-card-text>-->
            <!--</v-card>-->

            <!--<v-card style="margin: 20px; padding: 0; background-color: #e7e5df;">-->
                <!--<Donut></Donut>-->
                <!--<v-card-text class="text-xs-center"><strong>Monthly Pass holders and Flex Pass holders</strong> have most popular start-->
                    <!--and end stations in common whereas <strong>Walk-up holders and Staff Annual</strong> bikers have most popular start-->
                    <!--and end stations in common! Depending on the route you take, you might want to invest in a different-->
                    <!--pass.-->
                <!--</v-card-text>-->
            <!--</v-card>-->

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
        data(){
            return{
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

<style>
    .graphs-container{
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

    .page-container{
        text-align: center;
    }

</style>