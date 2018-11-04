<script>
    import {Line} from 'vue-chartjs';

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Quantity of Rides vs. Time'
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
            data: Object,
            options: Object
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
                            label: "Number of Rides",
                            data: this.frequency_data,
                            borderColor: '#8d86c9',
                            backgroundColor: '#242038' ,
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
            frequency_data() {
                return this.data.seasonalData[0];
            }
        }
    }


</script>