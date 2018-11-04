<script>
    import {Doughnut} from 'vue-chartjs'

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Most Popular Ending Stations by Pass Type'
        }
    };
    export default {
        data() {
            return {
                initial_data: [],
                initial_label: []
            }
        },
        extends: Doughnut,

        watch: {
            data: function () {
                this.$data._chart.destroy();
                this.renderDonutChart();
            }
        },

        mounted() {
            this.$http.get('http://ec2-107-23-31-8.compute-1.amazonaws.com:3000/ending').then(response => {
                var x = response.body['Monthly Pass'].slice(0,4);
                for(var i = 0; i < x.length; ++i){
                    this.initial_data.push(x[i][1]);
                    this.initial_label.push('Station '+x[i][0]);
                }

            });
            this.renderDonutChart()
        },

        methods: {
            renderDonutChart() {
                this.renderChart({
                        labels: this.labels,
                        datasets: [
                            {
                                backgroundColor: ['#628395', '#96897b', '#dfd5a5', '#dbad6a'],
                                data: this.data,
                            }
                        ]
                    }, options
                );
            }

        },
        computed: {
            labels(){
                if(this.$store.getters.getEndArray.length === 0){
                    return this.initial_label;
                }else{
                    var x = this.$store.getters.getEndLabels.slice(0,4);
                    var temp = [];
                    for(var i = 0; i < x.length; ++i){
                        temp.push("Station "+ x[i]);
                    }
                    return temp;
                }
            },
            data(){
                if(this.$store.getters.getEndArray.length === 0){
                    return this.initial_data;
                }else{
                    return this.$store.getters.getEndArray.slice(0,4);
                }
            }
        }
    }
</script>