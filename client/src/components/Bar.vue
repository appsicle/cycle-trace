<script>
    import {Bar} from 'vue-chartjs';

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Average Distance Per Ride vs. Pass Type'
        },
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    callback(value, index, values) {
                        return value + ' m'
                    }
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Average Distance Per Ride'
                }
            }]
        },
        layout: {
            padding: {
                left: 13,
                top: 10
            }
        }
    };

    export default {
        extends: Bar,

        props: {
            data: Object
        },

        watch: {
            data: function () {
                this.$data._chart.destroy();
                this.renderBarChart();
            }
        },

        mounted() {
            this.renderBarChart()
        },

        methods: {
            renderBarChart() {
                this.renderChart({
                        labels: this.labels,
                        datasets: [
                            {
                                label: 'Average Distance Traveled (meters)',
                                backgroundColor: ['#f87979', '#8d6a9f', '#c5cbd3', '#8cbcb9'],
                                data: this.data.averageDistances,

                            }
                        ]
                    }, options
                );
            }

        },
        computed: {
            labels(){
                return this.$store.getters.getPassTypes;
            }
        }
    }
</script>

