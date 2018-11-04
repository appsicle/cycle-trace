<script>
    import {Bubble} from 'vue-chartjs';

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Popularity of Route Combinations'
        },
        scales: {
            xAxes: [{
                display: true,
                ticks: {
                    beginAtZero: false,
                    steps: 1,
                    stepValue: 5,
                    max: 3100,
                    min: 2980
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Starting Stations'
                }
            }],
            yAxes: [{
                display: true,
                ticks: {
                    beginAtZero: false,
                    steps: 1,
                    stepValue: 5,
                    max: 3100,
                    min: 2980
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Ending Stations'
                }
            }]
        },
        layout: {
            padding: {
                top: 10
            }
        }
    };

    export default{

        extends: Bubble,
        props: {
            data: Object
        },
        watch: {
            data: function () {
                this.$data._chart.destroy();
                this.renderPieChart();
            }
        },

        mounted() {
            this.renderPieChart()
        },

        methods: {
            renderPieChart() {
                this.renderChart({
                        datasets: [
                            {
                                label: 'Popularity of Route Combination',
                                backgroundColor: this.colors,
                                data: this.data.bubbles
                            }
                        ]
                    }, options
                );
            }
        },
        computed: {
            colors(){
                var colors = [];
                for(var i = 0; i < this.data.bubbles.length; ++i){
                    var color = 'rgba(';
                    for (var j = 0; j < 3; j++) {
                        color += Math.floor(Math.random() * 256)+',';
                    }
                    color += '.3)';
                    colors.push(color);
                }
                return colors;
            }
        }
    }
</script>