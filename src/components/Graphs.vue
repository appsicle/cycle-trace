<template>
    <div class="graphs-container">
        <PassStats :data="averageDistances"/>
        <Pie :data="frequency"></Pie>
        <Donut></Donut>
    </div>
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