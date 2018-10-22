<script>
    import {Pie} from 'vue-chartjs'

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Frequency of Pass Type'
        }
    };
    export default {
        extends: Pie,

        props: ['data'],

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
                        labels: this.labels,
                        datasets: [
                            {
                                backgroundColor: ['#bed7d1', '#f7ebc3', '#fbd6c6', '#f8e1e7'],
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