<script>
    import {Pie} from 'vue-chartjs'

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Quantity of Each Pass Purchased'
        },
        layout: {
            padding: {
                top: 10
            }
        }
    };

    export default {
        data() {
            return {
                value: false
            }
        },
        extends: Pie,

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
                        labels: this.labels,
                        datasets: [
                            {
                                backgroundColor: ['#bed7d1', '#f7ebc3', '#fbd6c6', '#f8e1e7'],
                                data: this.data.frequency,
                            }
                        ]
                    }, options
                );
            }

        },
        computed: {
            labels() {
                return this.$store.getters.getPassTypes;
            }
        }
    }
</script>