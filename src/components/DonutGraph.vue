<script>
    import {Doughnut} from 'vue-chartjs'

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Average Distance Per Ride vs. Pass Type'
        }
    };
    export default {
        extends: Doughnut,

        watch: {
            data: function () {
                this.$data._chart.destroy();
                this.renderDonutChart();
            }
        },

        mounted() {
            console.log(this.data, "hello");
            this.renderDonutChart()
        },

        methods: {
            renderDonutChart() {
                this.renderChart({
                        labels: this.labels,
                        datasets: [
                            {
                                backgroundColor: '#f87979',
                                data: this.data,

                            }
                        ]
                    }, options
                );
            }

        },
        computed: {
            labels(){
                return this.$store.getters.getPassTypes;
            },
            data(){
                console.log("hi")
                for(var i = 0; i < this.$store.getters.getStartArray.length; ++i){
                    console.log(this.$store.getters.getStartArray[i])
                }
                return this.$store.getters.getStartArray;
            }
        }
    }
</script>