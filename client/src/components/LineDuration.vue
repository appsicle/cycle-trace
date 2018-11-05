<script>
    import {Line} from 'vue-chartjs';

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Average Duration of Rides vs. Time'
        },
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    callback(value, index, values) {
                        return value + ' min'
                    }
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Average Duration Per Ride',
                }
            }]
        },
        layout: {
            padding: {
                top: 10
            }
        }
    };

    export default {
        extends: Line,
        props: {
            data: Object
        },
        watch: {
            data: function () {
                this.$data._chart.destroy();
                this.renderLineChart();
            }
        },
        mounted() {
            this.renderLineChart()
        },

        methods: {
            renderLineChart() {
                this.renderChart({
                        labels: this.labels,

                        datasets: [{
                            label: "Average Duration of Ride",
                            data: this.duration_data,
                            borderColor: '#b185a7',
                            backgroundColor: '#8d6b94' ,
                            fill: false
                        }]
                    }, options
                );
            }

        },
        computed: {
            labels() {
                return Object.keys(this.$store.getters.getSeasons);
            },
            duration_data() {
                return this.data.seasonalData[1];
            }
        }
    }


</script>