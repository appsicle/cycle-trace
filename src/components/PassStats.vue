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
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Pass Type'
                }
            }],
            yAxes: [{
                display: true,
                ticks: {
                    callback(value, index, values) {
                        return value + ' m'
                    }
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Average Distance'
                }
            }]
        }
    };

    export default {
        extends: Bar,

        props: ['data'],

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
                                label: 'Average Distance (meters)',
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
            }
        }
    }
</script>

